import React, { useContext } from "react";
import { BeatLoader } from "react-spinners";
import { navigate } from "gatsby";
import { AuthContext } from "../../contexts/AuthContext";
import Logo from "../logo";

const Authenticated = ({ children }) => {
  let { loading, isAuthenticated } = useContext(AuthContext);

  if (!loading) {
    if (!isAuthenticated) {
      navigate("/");
    }
  }

  if (loading)
    return (
      <div className="grid h-screen place-content-center">
        <Logo />
        <div className="mt-5 text-center">
          <BeatLoader size={9} color="#6A3E84" />
        </div>
      </div>
    );

  return <>{children}</>;
};

export default Authenticated;
