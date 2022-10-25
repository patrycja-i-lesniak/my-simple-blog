import React from "react";

import { ActionForm, GoogleLoginForm } from "components";

export default function SignIn() {
  return (
      <div className="form-container">
        <ActionForm text="Sign in" />
        <GoogleLoginForm />
      </div>
  );
}
