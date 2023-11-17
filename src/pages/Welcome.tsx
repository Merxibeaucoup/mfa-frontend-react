import React, { useEffect } from "react";

const Welcome = () => {
  useEffect(() => {
    localStorage.removeItem("userEmail");
  }, []);

  return (
    <div>
      <h1>welcome</h1>
    </div>
  );
};

export default Welcome;
