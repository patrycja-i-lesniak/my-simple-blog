import React from "react";
import { NavLink } from "react-router-dom";

import { auth } from "config/firebaseConfig";

export default function SignedOutLinks() {
  const user = auth.currentUser;

  return (
    <div hidden={user}>
      <NavLink className="mainmenu__link" to="/signup">
        Sign up
      </NavLink>
      <NavLink className="mainmenu__link" to="/signin">
        Sign in
      </NavLink>
    </div>
  );
}
