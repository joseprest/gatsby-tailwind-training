import classNames from "classnames";
import { Link } from "gatsby";
import * as Yup from "yup";
import React, { useContext, useState } from "react";
import { ChevronDown } from "react-feather";
import { Helmet } from "react-helmet";
import Authenticated from "../../components/layouts/Authenticated";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import ProfileImage from "../../components/ProfileImage";
import { AuthContext } from "../../contexts/AuthContext";
import AppForm from "../../components/AppForm";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {
  logout,
  updateProfile,
} from "../../helpers/supabase";
import swal from "sweetalert";

const validationSchema = Yup.object().shape({
  first_name: Yup.string().nullable().label("First Name"),
  last_name: Yup.string().nullable().label("Last Name"),
  email: Yup.string().email().label("Email"),
  company: Yup.string().nullable().label("Company name"),
});

export default function ProfilePage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const mobileMenuOpen = () => setIsOpen(!isOpen);
  const [loading, setLoading] = useState<boolean>(false);
  let { user, refetch } = useContext(AuthContext);

  const handleSubmit = async (payload) => {
    setLoading(true);
    try {
      await updateProfile(payload);
      await refetch();
      swal("Profile updated successfully", "", "success");
    } catch (error) {
      swal(error.message, "", "error");
    }
    setLoading(false);
  };

  const handleLogout = () => {
    swal({
      title: "Sure to logout?",
      icon: "warning",
      dangerMode: true,
      // @ts-ignore
      buttons: true,
    }).then(async (yes) => {
      if (!yes) return;
      await logout();
      window.location.reload();
    });
  };

  return (
    <>
      <Helmet title="Profile | Timeflow Academy"></Helmet>
      <Authenticated>
        <DefaultLayout>
          <div
            className="bg-right-top bg-no-repeat bg-cover py-9"
            style={{ backgroundImage: "url(/assets/img/page-cover.png)" }}
          >
            <div className="container mx-auto">
              <h1 className="text-3xl font-bold text-center text-white">
                My Account
              </h1>
            </div>
          </div>
          <div className="pb-16 md:py-16">
            <div className="max-w-3xl mx-auto md:px-5">
              <div className="flex flex-wrap">
                <div className="relative w-full pb-5 mb-8 md:max-w-1/3 lg:max-w-xs md:py-5 md:bg-grey-500 md:mr-16 md:mb-0">
                  <div
                    className="flex items-center justify-between visible p-5 mb-1 cursor-pointer bg-grey-500 md:hidden"
                    onClick={mobileMenuOpen}
                  >
                    <div className="font-semibold">Account Info</div>
                    <ChevronDown className="text-grey-lite" size={24} />
                  </div>
                  <ul
                    className={classNames(
                      "md:bg-transparent bg-grey-500 md:block md:relative absolute z-20 left-0 w-full md:top-auto top-16 shadow-lg md:shadow-none",
                      {
                        hidden: !isOpen,
                      }
                    )}
                  >
                    <li className="border-b border-grey-700 py-3 md:px-8 px-5 !text-black">
                      <Link to="/account/profile">Account Info</Link>
                    </li>
                    <li className="px-5 py-3 border-b border-grey-700 md:px-8 text-grey-lite">
                      <Link to="/account/reset-password">Password</Link>
                    </li>
                    <li className="px-5 py-3 text-red-500 md:px-8">
                      <button onClick={handleLogout}>Logout</button>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 px-5 md:px-0">
                  <h1 className="mb-5 text-2xl font-bold text-black">
                    Account Info
                  </h1>
                  <div className="flex flex-col items-center mb-6 md:items-start">
                    <ProfileImage />
                  </div>
                  <AppForm
                    initialValues={{
                      name: user?.name,
                      email: user?.email,
                      company: user?.company,
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                  >
                    <div className="flex flex-col space-y-6">
                      <Input placeholder="Full Name" name="name" />
                      <Input placeholder="Email address" name="email" />
                      <Input placeholder="Company name" name="company" />
                      <Button loading={loading}>Save</Button>
                    </div>
                  </AppForm>
                </div>
              </div>
            </div>
          </div>
        </DefaultLayout>
      </Authenticated>
    </>
  );
}
