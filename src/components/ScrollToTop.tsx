import React, { useEffect, useState } from "react";
import { ChevronUp } from "react-feather";

export default function ScrollToTop() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-1/6 justify-end lg:flex hidden">
      <span className="flex items-center cursor-pointer" onClick={handleClick}>
        Up <ChevronUp className="ml-1" size={20} />
      </span>
    </div>
  );
}
