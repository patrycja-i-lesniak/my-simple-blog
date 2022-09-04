import React from "react";

import { ActionForm, GoogleLoginForm } from "components";

export default function Login() {
  return (
    <div className="form-container">
      <ActionForm text="Log in" />
      <GoogleLoginForm />
    </div>
  );
}
