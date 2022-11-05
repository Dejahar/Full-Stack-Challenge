import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "pages/layout";
import Home from "pages/home";
import Gif from "pages/gif";
import Genre from "pages/genre";
import Register from "components/register";
// import Error from "components/error/Error";

const Router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gifs/:gifID" element={<Gif />} />
          <Route path="gifs/genre/:genre" element={<Genre />} />
        </Route>
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default Router;
