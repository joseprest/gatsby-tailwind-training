import classNames from "classnames";
import { useFormikContext } from "formik";
import React from "react";

const ErrorText = ({ error, visible }) => {
  if (!visible) return null;
  return <p className="absolute text-sm text-orange -bottom-6">{error}</p>;
};

const Input = ({ name, ...props }) => {
  const { errors, touched, handleChange, handleBlur, values } =
    useFormikContext();

  return (
    <label className="relative w-full">
      <input
        {...props}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name] || ""}
        className={classNames(
          "w-full p-3 border rounded-md border-grey-600 focus:outline-none focus:ring-primary focus:ring-2",
          {
            "ring-orange": errors[name] && touched[name],
            "ring-2": errors[name] && touched[name],
          }
        )}
      />
      <ErrorText error={errors[name]} visible={errors[name] && touched[name]} />
    </label>
  );
};

export default Input;
