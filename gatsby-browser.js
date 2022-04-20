import React from "react";
import AuthContextProvider from "./src/contexts/AuthContext";
import "./src/styles/global.scss";

export const wrapRootElement = ({ element }) => {
  return (
    <section data-app-name="timeflow-academy">
      <AuthContextProvider>{element}</AuthContextProvider>
    </section>
  );
};
