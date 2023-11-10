import React, { useState } from "react";
import userService, { IUser } from "../../Services/userService";

interface RegisterLeftProps {
  setShowQr: React.Dispatch<React.SetStateAction<boolean>>;
  setImageData: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const RegisterLeft: React.FC<RegisterLeftProps> = ({
  setShowQr,
  setImageData,
}) => {
  const [formData, setFormData] = useState<IUser>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    mfaEnabled: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.email ||
      !formData.password
    ) {
      console.log("Please fill out all required fields");
      return;
    }

    try {
      const res = await userService.create(formData);
      if (res.success) {
        console.log("User registered sucessfully ", res.data);

        const uri: string | undefined = res?.data?.secretImageUri;

        if (formData.mfaEnabled) {
          setShowQr(true);
          setImageData(uri);
        }

        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          mfaEnabled: false,
        });
      } else {
        console.log("registration failed", res.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div>
      <h1>Registration form</h1>
      <form onSubmit={handleSubmit}>
        <label className="firstname">
          First Name:
          <input
            required
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className="lastname">
          Last Name:
          <input
            required
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label className="email">
          Email:
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className="password">
          Password:
          <input
            required
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label className="mfa">
          MFA Enabled:
          <input
            type="checkbox"
            name="mfaEnabled"
            checked={formData.mfaEnabled}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Register &nbsp; &nbsp; &rarr;</button>
      </form>
    </div>
  );
};

export default RegisterLeft;
