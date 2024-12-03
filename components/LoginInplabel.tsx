import React from "react";

const LoginInpLabel = ({
  children,
  required,
  htmlFor,
}: {
  children: string;
  required: boolean;
  htmlFor: string;
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-black-400 title2 font-[400] py-1 block"
    >
      {children}
      {required ? <span className="text-error-600">*</span> : ""}
    </label>
  );
};

export default LoginInpLabel;
