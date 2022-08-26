import React, { useState, useEffect } from "react";
import { useAuth } from "../../config/firebase";
import { Button, Form } from "react-bootstrap";
import UserDataForm from "../auth/UserDataForm";

export default function ProfileHeader() {
    const currentUser= useAuth();
  
  const [photoURL, setPhotoURL] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      if (currentUser && currentUser.photoURL) {
        setPhotoURL(currentUser.photoURL);
      }
    }, [currentUser]);

     function toggleIsVisible() {
       setIsVisible(!isVisible);
     }

  return (
    <>
    {currentUser && <div className="profile-container">
      <div className="profile-container-left">
        <p>
          Hello <span>{currentUser.email}</span>!
        </p>
        <Button variant="btn btn-info" onClick={toggleIsVisible}>
          Uzupełnij profil
        </Button>
      </div>
      <img src={photoURL} alt="Avatar" className="avatar big" />
      
    </div>}
    {isVisible && <UserDataForm />}
    </>
  );
}
