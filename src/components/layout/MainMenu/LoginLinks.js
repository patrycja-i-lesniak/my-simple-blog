import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import blankProfilePicture from "assets/blank-profile-picture.png";
import { useAuth, auth } from "firebaseConfig";
import { signOut } from "firebase/auth";

export default function LoginLinks() {
  const [photoURL, setPhotoURL] = useState(blankProfilePicture);
  const [name, setName] = useState("");
  const currentUser = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    currentUser && currentUser.photoURL ? setPhotoURL(currentUser.photoURL) : setPhotoURL(photoURL);
  }, [currentUser, photoURL]);

  useEffect(() => {
    currentUser && currentUser.displayName ? setName(currentUser.displayName) : setName(name);
  }, [currentUser, name]);

  function handleClick() {
    signOut(auth);
    navigate("/", { replace: true });
  }

  return (
    currentUser && (
      <>
        <button className="mainmenu__logout" onClick={handleClick}>
          Logout
        </button>
        <NavLink to="/login/profile" className="mainmenu__profile">
          {name}
        </NavLink>
        <img src={photoURL} alt="Avatar" className="avatar" />
      </>
    )
  );
}
