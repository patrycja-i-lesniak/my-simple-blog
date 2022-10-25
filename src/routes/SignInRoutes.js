import React from "react";
import { Routes, Route } from "react-router-dom";
import { SignIn, Profile } from "components";

export default function SignInRoutes() {
  return (
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
}
