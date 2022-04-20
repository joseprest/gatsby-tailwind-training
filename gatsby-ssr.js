import React from "react";
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      defer
      data-domain="timeflow.academy"
      src="https://plausible.io/js/plausible.js"
    ></script>,
  ]);
};
