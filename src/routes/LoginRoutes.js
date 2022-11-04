import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Profile } from "components";

export default function LoginRoutes() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
}
