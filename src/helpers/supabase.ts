import { v4 as uniqueID } from "uuid";
import { createClient } from "@supabase/supabase-js";
import mime from "mime-types";

export const supabase = createClient(
  process.env.GATSBY_SUPABASE_URL,
  process.env.GATSBY_SUPABASE_KEY
);

interface User {
  uid: string;
  name: string;
  avatar: string;
  email: string;
  last_sign_in_at: string;
}

const getFilePublicUrl = (bucketName: string, location: string) => {
  return new Promise((resolve, reject) => {
    const { publicURL, error, data } = supabase.storage
      .from(bucketName)
      .getPublicUrl(location);
    if (error) reject(error);

    resolve(publicURL);
  });
  // return `https://gdrawfthjguletjpgfhy.supabase.in/storage/v1/object/public/${bucketName}/${location}`;
};

export const uploadFile = async (
  bucketName: string,
  fileName: string,
  file: File
) => {
  // const type = "jpeg";
  const type = file.type.split("/")[1];
  const file_name = `${fileName}.${type}`;

  await supabase.storage.from(bucketName).remove([file_name]);

  return new Promise(async (resolve, reject) => {
    const { error, data } = await supabase.storage
      .from(bucketName)
      .upload(file_name, file, {
        cacheControl: "3600",
        upsert: true,
      });

    if (error) reject(error);
    const url = await getFilePublicUrl(bucketName, data.Key.split("/")[1]);
    resolve(url);
  });
};

export const getObject = async (collectionName, key, value) => {
  const { body } = await supabase
    .from(collectionName)
    .select("*")
    .filter(key, "eq", value)
    .limit(1);

  return body[0];
};

export const insertObject = async (collectionName, payload) => {
  await supabase.from(collectionName).insert([payload]);
};

export const updateObject = async (collectionName: string, match, payload) => {
  return new Promise(async (resolve, reject) => {
    const { data, error } = await supabase
      .from(collectionName)
      .update(payload)
      .match(match);
    if (error) reject(error);
    resolve(data);
  });
};

export const currentUser = async (): Promise<User> => {
  const user = await supabase.auth.user();
  if (!user) return null;
  const dbUser = await getObject("users", "uid", user.id);
  return { ...user, ...dbUser };
};

export const updateProfile = async (payload): Promise<any> => {
  const user = await supabase.auth.user();
  return new Promise(async (resolve, reject) => {
    try {
      const res = await updateObject("users", { uid: user.id }, payload);
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

export const updateProfilePhoto = async (file: File): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await supabase.auth.user();

      if (!file) {
        return await updateObject("users", { uid: user.id }, { avatar: null });
      }

      const avatar = await uploadFile("avatars", user.id, file);
      await updateObject("users", { uid: user.id }, { avatar });

      resolve(avatar);
    } catch (error) {
      reject(error);
    }
  });
};

export const verifyOldPassword = async (old_password) => {
  return new Promise(async (resolve, reject) => {
    const user = await currentUser();
    const { error } = await supabase.auth.signIn({
      email: user.email,
      password: old_password,
    });
    if (error) reject({ message: "Invalid old password" });
    resolve(undefined);
  });
};

export const updatePassword = async (old_password, new_password) => {
  await verifyOldPassword(old_password);
  // console.log({ old_password, new_password });
};

export const createUser = async ({ name, email, password }) => {
  return new Promise(async (resolve, reject) => {
    const existedUser = await getObject("users", "email", email);
    if (existedUser) reject({ message: "You already have an account." });

    const { error, user } = await supabase.auth.signUp({ email, password });
    if (error) return reject(error);

    // Storing user profile to db
    await insertObject("users", {
      name,
      email,
      uid: user.id,
    });

    resolve(user);
  });
};

export const logout = async () => {
  return new Promise(async (resolve, reject) => {
    const { error } = await supabase.auth.signOut();
    if (error) return reject(error);
    resolve(null);
  });
};
