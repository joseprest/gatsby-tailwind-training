import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "gatsby";
import * as Yup from "yup";
import YupPassword from "yup-password";

import { ChevronDown } from "react-feather";
import { Helmet } from "react-helmet";
import AppForm from "../../components/AppForm";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Authenticated from "../../components/layouts/Authenticated";
import { logout, updatePassword } from "../../helpers/supabase";
import swal from "sweetalert";

YupPassword(Yup);
const validationSchema = Yup.object().shape({
  new_password: Yup.string().nullable().label("First Name"),
  new_password_again: Yup.string().nullable().label("First Name"),
  old_password: Yup.string().nullable().label("First Name"),
});

export default function ResetPassword() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuOpen = () => setIsOpen(!isOpen);

  const handleSubmit = async ({ old_password, ...password }) => {
    await updatePassword(old_password, password.new_password);
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
      <Helmet title="Change Password | Timeflow Academy"></Helmet>
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
                    <div className="font-semibold">Change Password</div>
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
                    <li className="px-5 py-3 border-b border-grey-700 md:px-8 text-grey-lite">
                      <Link to="/account/profile">Account Info</Link>
                    </li>
                    <li className="px-5 py-3 text-black border-b border-grey-700 md:px-8">
                      <Link to="/account/reset-password">Password</Link>
                    </li>
                    <li className="px-5 py-3 text-red-500 md:px-8">
                      <button onClick={handleLogout}>Logout</button>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 px-5 md:px-0">
                  <h1 className="mb-5 text-2xl font-bold text-black">
                    Change Password
                  </h1>
                  <AppForm
                    initialValues={{
                      new_password: "",
                      new_password_again: "",
                      old_password: "",
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                  >
                    <div className="flex flex-col space-y-6">
                      <Input name="old_password" placeholder="Old Password" />
                      <Input name="new_password" placeholder="New Password" />
                      <Input
                        name="new_password_again"
                        placeholder="Confirm new password"
                      />
                      <Button>Save</Button>
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
