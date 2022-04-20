import React, { useEffect } from "react";
import { BeatLoader } from "react-spinners";
import Logo from "./logo";

export const Preloader = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector("body").classList.remove("overflow-hidden");
      document.querySelector("body").classList.add("body-loaded");
    }, 500);
  }, []);
  return (
    <div className="preloader-card grid place-content-center fixed top-0 left-0 w-screen h-screen bg-white z-99999">
      <Logo />
      <div className="mt-5 text-center">
        <BeatLoader size={9} color="#6A3E84" />
      </div>
    </div>
  );
};
