import React from "react";

interface RegisterRightProps {
  showQr: boolean;
  imageData: string | undefined;
}

const RegisterRight: React.FC<RegisterRightProps> = ({ showQr, imageData }) => {
  console.log(showQr, imageData);

  return (
    <div>
      {showQr && (
        <>
          <img src={imageData} alt="" />

          <form>
            <label>
              <input type="text" />
            </label>
            <button>submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default RegisterRight;
