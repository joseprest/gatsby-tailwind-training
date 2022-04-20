import classNames from "classnames";
import React from "react";

export default function CopyToClipboard(props) {
  const [copied, setCopied] = React.useState(false);
  const copyCode = () => {
    navigator.clipboard.writeText(props.children.props.children);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative">
      <button className="absolute top-3 right-2" onClick={copyCode}>
        <span
          className={classNames(
            "absolute text-black -left-20 top-0.5 bg-white py-1 px-3 rounded-3xl z-50 text-sm",
            {
              hidden: !copied,
            }
          )}
        >
          Copied
        </span>
        <svg
          width={34}
          height={34}
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="1" cx={17} cy={17} r={17} fill="white" />
          <path
            d="M11 12.5H9.5V23C9.5 23.825 10.175 24.5 11 24.5H21.5V23H11V12.5ZM23 11V20H14V11H23ZM23 9.5H14C13.175 9.5 12.5 10.175 12.5 11V20C12.5 20.825 13.175 21.5 14 21.5H23C23.825 21.5 24.5 20.825 24.5 20V11C24.5 10.175 23.825 9.5 23 9.5ZM17 18.875V12.125L21.5 15.5L17 18.875Z"
            fill="black"
          />
        </svg>
      </button>
      <pre {...props}></pre>
    </div>
  );
}
