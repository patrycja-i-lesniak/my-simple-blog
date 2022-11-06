import React from "react";
import { NavLink } from "react-router-dom";

import { auth } from "config/firebaseConfig";

export default function LogoutLinks() {
  const user = auth.currentUser;

  return (
    <div hidden={user}>
      <NavLink className="mainmenu__link" to="/register">
        Register
      </NavLink>
      <NavLink className="mainmenu__link" to="/login">
        Login
      </NavLink>
    </div>
  );
}
