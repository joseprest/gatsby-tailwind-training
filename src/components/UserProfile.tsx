import React, { useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDown, User } from "react-feather";
import classNames from "classnames";
import { Link } from "gatsby";
import { BeatLoader } from "react-spinners";
import { AuthContext } from "../contexts/AuthContext";
import swal from "sweetalert";
import { logout } from "../helpers/supabase";

const DropdownMenuForGuest = () => (
  <>
    <Menu.Item>
      {({ active }) => (
        <Link
          to="/auth/login"
          className={classNames(
            "group flex rounded-md items-center w-full px-2 py-2 text-sm",
            {
              "bg-primary text-white": active,
              "text-gray-900": !active,
            }
          )}
        >
          Login
        </Link>
      )}
    </Menu.Item>
    <Menu.Item>
      {({ active }) => (
        <Link
          to="/auth/register"
          className={classNames(
            "group flex rounded-md items-center w-full px-2 py-2 text-sm",
            {
              "bg-primary text-white": active,
              "text-gray-900": !active,
            }
          )}
        >
          Register
        </Link>
      )}
    </Menu.Item>
  </>
);

const DropdownMenuForAuthUser = () => {
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
      <Menu.Item>
        {({ active }) => (
          <Link
            to="/account/profile"
            className={classNames(
              "profile-menu group flex rounded-md items-center w-full px-2 py-2 text-sm",
              {
                "bg-orange text-white": active,
                "text-gray-900": !active,
              }
            )}
          >
            Profile
          </Link>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <button
            onClick={handleLogout}
            className={classNames(
              "group flex rounded-md items-center w-full px-2 py-2 text-sm",
              {
                "bg-orange text-white": active,
                "text-gray-900": !active,
              }
            )}
          >
            Logout
          </button>
        )}
      </Menu.Item>
    </>
  );
};

export default function UserProfile() {
  let { loading, isAuthenticated, user } = useContext(AuthContext);

  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          {loading ? (
            <BeatLoader size={9} color="#6A3E84" />
          ) : (
            <Menu.Button className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium rounded-md text-grey-lite bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <div className="flex items-center justify-center mr-3 overflow-hidden rounded-full w-7 h-7 bg-grey-lite">
                {user?.avatar ? (
                  <img
                    className="object-cover h-full"
                    src={`${user?.avatar}?${Date.now()}`}
                  />
                ) : (
                  <User size={20} color="#fff" />
                )}
              </div>
              {isAuthenticated ? user.name : "Guest"}
              <ChevronDown className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100" />
            </Menu.Button>
          )}
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-50 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              {isAuthenticated ? (
                <DropdownMenuForAuthUser />
              ) : (
                <DropdownMenuForGuest />
              )}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
