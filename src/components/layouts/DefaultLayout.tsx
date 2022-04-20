import React, { useEffect } from "react";
import Header from "../Header";
import { Helmet } from "react-helmet";
import ScrollToTop from "../ScrollToTop";
import Logo from "../logo";

const DefaultLayout = ({ children }) => {
  useEffect(() => {
    document.body.classList.add("bg-white");
  }, []);
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </Helmet>
      <Header />
      <main className="pb-8 lg:pb-12">{children}</main>
      <footer className="py-10 border-t border-grey-lite border-opacity-20">
        <div className="w-full px-5 mx-auto text-center lg:container">
          <div className="flex flex-wrap">
            <div className="flex justify-center w-full mb-5 lg:w-1/6 lg:mb-0 lg:justify-start">
              <Logo />
            </div>
            <div className="w-full lg:w-4/6">
              <p className="text-center text-grey-lite">
                &copy; {new Date().getFullYear()} Timeflow Academy. Bought To
                You By <a href="http://timeflow.systems">Timeflow</a>.
              </p>
            </div>
            <ScrollToTop />
          </div>
        </div>
      </footer>
    </>
  );
};

export default DefaultLayout;
