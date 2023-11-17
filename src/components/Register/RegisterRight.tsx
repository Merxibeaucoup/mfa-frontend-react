import React from "react";
import mfaVerificationService, {
  IVerification,
} from "../../Services/mfaVerificationService";
import { useNavigate } from "react-router-dom";

interface RegisterRightProps {
  showQr: boolean;
  imageData: string | undefined;
  userEmail: string;
}

const RegisterRight: React.FC<RegisterRightProps> = ({
  showQr,
  imageData,
  userEmail,
}) => {
  console.log(showQr, imageData, userEmail);

  userEmail = localStorage.getItem("userEmail") || "";
  const [verifyMFAForm, setVerifyMFAForm] = React.useState<IVerification>({
    email: userEmail,
    code: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setVerifyMFAForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  console.log(showQr, imageData, userEmail);
  console.log(verifyMFAForm.email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!verifyMFAForm.code) {
      console.log("Please enter a code");
      return;
    }

    try {
      const res = await mfaVerificationService.verify(verifyMFAForm);
      if (res.success) {
        console.log("MFA verified successfully", res.data);

        navigate("/welcome");
      } else {
        console.log("MFA verification failed", res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {showQr && (
        <>
          <img src={imageData} alt="" />

          <form onSubmit={handleSubmit}>
            <label>
              <input
                required
                type="text"
                name="code"
                value={verifyMFAForm.code}
                onChange={handleInputChange}
              />
            </label>
            <button>submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default RegisterRight;
