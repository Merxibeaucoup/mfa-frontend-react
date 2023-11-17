import React, { useState } from "react";
import RegisterLeft from "./RegisterLeft";
import RegisterRight from "./RegisterRight";

const Register = () => {
  const [showQr, setShowQr] = useState<boolean>(false);
  const [imageData, setImageData] = useState<string | undefined>(undefined);
  const [userEmail, setUserEmail] = useState<string>("");

  return (
    <div className="register">
      <div className="register__form">
        <div className="register__form-inner">
          <div className="register__form-inner--left">
            <RegisterLeft
              setShowQr={setShowQr}
              setImageData={setImageData}
              setUserEmail={setUserEmail}
            />
          </div>
          <div className="register__form-inner--right">
            <RegisterRight
              showQr={showQr}
              imageData={imageData}
              userEmail={userEmail}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
