import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "pages/layout";
// import Login from "pages/login";
// import Home from "pages/home";
// import Register from "pages/register";
// import Error from "components/error/Error";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="error" element={<Error />} /> */}
      </Route>
    </Routes>
  );
};

export default Router;
