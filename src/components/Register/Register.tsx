import React from "react";
import RegisterLeft from "./RegisterLeft";

const Register = () => {
  return (
    <div className="register">
      <div className="register__form">
        <div className="register__form-inner">
          <div className="register__form-inner--left">
            <RegisterLeft />
          </div>
          <div className="register__form-inner--right">right</div>
        </div>
      </div>
    </div>
  );
};

export default Register;
