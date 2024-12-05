"use client";
import React, { useState } from "react";
import LoginFormWithImg from "./LoginFormWithImg";
import LoginFormWithPass from "./LoginFormWithPass";
import SwitchButton from "./SwitchButton";

const FormSelector = () => {
  const [selectedForm, setSelectedForm] = useState(1);
  function handleOnClick() {
    if (selectedForm === 1) setSelectedForm(2);
    if (selectedForm === 2) setSelectedForm(1);
  }
  return (
    <div>
      {selectedForm === 1 && <LoginFormWithImg />}
      {selectedForm === 2 && <LoginFormWithPass />}
      <SwitchButton type="secondary" onclick={handleOnClick}>
        Login With email and password
      </SwitchButton>
    </div>
  );
};

export default FormSelector;
