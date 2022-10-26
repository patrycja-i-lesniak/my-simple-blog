import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

import { auth } from "config/firebaseConfig";

export default function SignedInLinks() {
  const [loading, setLoading] = useState(false);
  const user = auth.currentUser;
  const navigate = useNavigate();

  async function handleLogout(e) {
    e.preventDefault();
    setLoading(true);
    signOut(auth)
      .then(() => {
        console.log("Log Out");
      })
      .catch((error) => {
        alert("Error!");
      });
    setLoading(false);
    navigate("/");
  }

  return (
    <div hidden={loading || !user}>
      <NavLink end to="/" onClick={(e) => handleLogout(e)}>
        Log Out
      </NavLink>
      <NavLink  to="/signin/profile">
        Your Profile
      </NavLink>
    </div>
  );
}
