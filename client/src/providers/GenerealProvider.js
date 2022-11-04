import React from "react";
import AuthProvider from "./AuthProvider";

const GeneralProvider = ({ children }) => {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
};

export default GeneralProvider;
