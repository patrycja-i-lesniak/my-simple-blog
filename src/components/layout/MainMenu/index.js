import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "config/firebaseConfig";
import SignedInLiks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

import blankProfilePicture from 'assets/blank-profile-picture.png';

import "./style.css";


export default function MainMenu({ toggleIsVisible, isVisible }) {
  const currentUser = useAuth();
 
  // const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(blankProfilePicture);

  useEffect(() => {
    currentUser && currentUser.photoURL ? setPhotoURL(currentUser.photoURL) : setPhotoURL(photoURL);
  }, [currentUser, photoURL]);
  return (
    <nav>
      <ul className="mainmenu">
        <Link className="mainmenu__link mainmenu__link--header" to="/" alt="logo">
          {" "}
          Simple Vege Life
        </Link>
        <div className="mainmenu__container">
          <SignedInLiks />
          <SignedOutLinks />
          {currentUser && <img src={photoURL} alt="Avatar" className="avatar" />}
        </div>
      </ul>
    </nav>
  );
}
