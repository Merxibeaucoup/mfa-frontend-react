import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import Welcome from "./pages/Welcome";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<RegisterPage />} />
          <Route path="welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
