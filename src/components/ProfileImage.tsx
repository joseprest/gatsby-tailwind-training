import React, { useContext, useEffect, useRef, useState } from "react";
import { BeatLoader } from "react-spinners";
import { AuthContext } from "../contexts/AuthContext";
import { updateProfilePhoto } from "../helpers/supabase";

const Image = ({ url }) => {
  if (!url)
    return (
      <svg
        width={86}
        height={100}
        viewBox="0 0 86 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1801_12396)">
          <path
            d="M25.4661 35.3979C25.0603 33.2781 23.0312 31.3266 20.2581 31.9322C17.485 32.5379 17.485 35.0951 17.8908 37.2149C17.9246 37.3158 19.2773 43.0359 20.089 44.2472C20.9006 45.4585 22.0504 47.7465 24.0119 47.0736C25.297 46.6361 26.0748 44.3481 26.3792 42.6994C26.6497 41.0507 25.4661 35.3979 25.4661 35.3979Z"
            fill="#F3F5F8"
          />
          <path
            d="M60.7379 35.3305C61.1437 33.2107 63.1728 31.2592 65.9459 31.8649C68.7191 32.4705 68.9896 35.1286 68.5838 37.2148C68.55 37.3157 67.0958 42.5984 66.3856 44.2471C65.8107 45.593 64.255 47.9483 62.2597 47.1071C61.0085 46.6024 60.163 44.2807 59.8586 42.632C59.5543 40.9833 60.7379 35.3305 60.7379 35.3305Z"
            fill="#F3F5F8"
          />
          <path
            d="M4.86984 76.2625C-0.0448727 88.2155 11.739 100.421 24.663 100.421H61.2641C74.5918 100.421 90.374 86.1779 81.4683 76.2625C78.6614 73.0996 57.153 66.0673 57.153 66.0673L29.0499 66C29.0499 66 6.42548 72.5949 4.86984 76.2625Z"
            fill="#CFD4DB"
          />
          <path
            d="M32.0938 64.2331C32.0938 64.2331 39.1618 70.0204 43.1523 70.0204C47.1091 70.0204 54.2109 64.2331 54.2109 64.2331C54.2109 64.2331 51.2011 60.7674 53.264 56.1913C55.327 51.649 30.2337 52.0191 33.1421 56.1913C36.0843 60.3636 32.0938 64.2331 32.0938 64.2331Z"
            fill="#F3F5F8"
          />
          <path
            d="M63.4431 19.516C63.4431 10.3639 57.7278 1.14453 42.611 1.14453C27.4942 1.14453 22.0156 11.2051 22.0156 20.3572C22.0156 20.8282 21.9818 45.7609 24.8902 51.481C27.8324 57.201 35.915 63.0557 43.1183 63.0557C50.9979 63.0893 58.0998 58.0422 61.414 51.481C64.762 44.9198 63.4431 19.516 63.4431 19.516Z"
            fill="#F3F5F8"
          />
          <path
            d="M66.8246 17.3289C64.9646 7.23465 56.6791 -0.0668334 43.1517 0.00046136C29.6582 0.101403 20.764 8.31136 19.0055 17.6653C18.2615 21.6694 17.6527 29.2737 17.9571 33.8161C20.2567 31.9318 21.1698 31.6963 22.2858 32.1337C23.0298 40.3773 24.856 40.2427 24.856 40.2427C24.856 40.2427 25.0251 34.6573 25.3971 30.956C25.7691 27.2548 31.8564 26.5819 34.9001 20.1889C44.5383 19.7851 50.6256 32.0328 61.1769 32.7057C60.1285 38.7959 62.462 41.1848 62.462 41.1848C62.462 41.1848 62.6987 36.1714 63.5442 33.7824C64.2882 31.6963 66.4864 31.6963 67.6024 32.6048C68.1097 28.8699 67.8729 22.8807 66.8246 17.3289Z"
            fill="#CFD4DB"
          />
          <path
            d="M30.7079 60.9355L29.0508 65.5789C29.0508 65.5789 33.9544 74.7646 38.1817 76.2787C39.4668 76.7498 42.1723 70.7942 43.1192 70.7942C43.5588 70.7942 47.2112 77.1199 47.7861 76.9853C52.1487 76.0096 57.12 65.6798 57.12 65.6798L55.2938 61.4403L43.1192 69.0446L30.7079 60.9355Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1801_12396">
            <rect width={86} height={100} fill="white" />
          </clipPath>
        </defs>
      </svg>
    );

  return <img src={`${url}?v=${Date.now()}`} className="h-48 object-cover" />;
};

export default function ProfileImage() {
  const profileInput = useRef();
  const [avatar, setAvatar] = useState<string>(null);
  const [loading, setLoading] = useState<boolean>(false);

  let { user, refetch } = useContext(AuthContext);

  const onChangeProfilePhoto = async ({ target: { files } }) => {
    setLoading(true);
    const file = files[0];
    const url = await updateProfilePhoto(file);
    setAvatar(url);
    await refetch();
    setLoading(false);
  };

  useEffect(() => {
    if (user?.avatar) setAvatar(user.avatar);
  }, [user]);

  const removeProfilePhoto = async () => {
    setAvatar(null);
    await updateProfilePhoto(null);
    await refetch();
  };

  return (
    <>
      <div className="relative">
        <div className="relative flex flex-col items-center justify-center w-32 h-32 mb-2 overflow-hidden border border-gray-500 border-dashed rounded-lg rounded-full ">
          <Image url={avatar} />
          {loading && (
            <div className="absolute top-0 left-0 z-20 flex items-center justify-center w-full h-full bg-white bg-opacity-70">
              <BeatLoader size={9} color="#6A3E84" />
            </div>
          )}
        </div>
        {avatar && (
          <button
            onClick={removeProfilePhoto}
            className="absolute top-0 right-0 z-50 flex items-center justify-center w-6 h-6 text-2xl text-white bg-red-500 rounded-full"
          >
            &times;
          </button>
        )}
      </div>
      <div className="flex text-red-500">
        <input
          type="file"
          ref={profileInput}
          onChange={onChangeProfilePhoto}
          className="hidden"
        />
        {!loading && (
          <button
            onClick={() => {
              // @ts-ignore
              profileInput.current.click();
            }}
            disabled={loading}
            className="border-b border-red-500 border-dashed cursor-pointer"
          >
            {avatar ? "Change" : "Upload"} Profile Photo
          </button>
        )}
      </div>
    </>
  );
}
