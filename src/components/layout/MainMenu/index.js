import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "config/firebaseConfig";
import SignedInLiks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { BiSearch } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";

import blankProfilePicture from "assets/blank-profile-picture.png";

import "./style.css";

import { SearchBox } from "components";

export default function MainMenu() {
  const currentUser = useAuth();

  // const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(blankProfilePicture);

  const [isVisible, setIsVisible] = useState(true);

  function toggleIsVisible() {
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    currentUser && currentUser.photoURL ? setPhotoURL(currentUser.photoURL) : setPhotoURL(photoURL);
  }, [currentUser, photoURL]);


  return (
    <nav>
      <ul className="mainmenu">
        <Link className="mainmenu__link mainmenu__link--header" to="/" alt="logo">
          Simple Vege Life
        </Link>
        <div className="mainmenu__container">
          {isVisible ? (
            <BiSearch className="search-icon" type="button" onClick={toggleIsVisible} />
          ) : (
            <RiCloseLine className="search-icon" onClick={toggleIsVisible} />
          )}

          <SignedInLiks />

          <SignedOutLinks />
          {currentUser && <img src={photoURL} alt="Avatar" className="avatar" />}
        </div>
      </ul>
      {!isVisible && <SearchBox isVisible={isVisible} toggleIsVisible={toggleIsVisible} />}
    </nav>
  );
}
