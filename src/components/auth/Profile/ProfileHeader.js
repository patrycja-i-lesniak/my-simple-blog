import React, { useState, useEffect } from "react";
import { useAuth } from "config/firebaseConfig";
import { Button, Image } from "react-bootstrap";

import { ProfileForm } from "components";

export default function ProfileHeader() {
  const currentUser = useAuth();
 
  const [isVisible, setIsVisible] = useState(false);
  const [photoURL, setPhotoURL] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );

  useEffect(() => {
    if (currentUser && currentUser.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);
 
  function toggleIsVisible() {
    setIsVisible(true);
  }

  return (
    <>
      {currentUser && (
        <div className="profile-container">
          <div className="profile-container-left">
            {!currentUser.displayName ? (
              <h5>Hello {currentUser.email}!</h5>
            ) : (
              <>
                <h5>Hello {currentUser.displayName}!</h5>
                <div className="profile-user-data">
                  <p>
                    User name: <span>{currentUser.displayName}</span>
                  </p>
                  <p>
                    Email address: <span>{currentUser.email}</span>
                  </p>
                </div>
              </>
            )}
            {!currentUser.emailVerified && (
              <Button variant="btn btn-info" onClick={toggleIsVisible} hidden={isVisible}>
                Edit user data
              </Button>
            )}
          </div>
          <Image roundedCircle src={photoURL} alt="Avatar" className="avatar big" />
        </div>
      )}
      {isVisible && <ProfileForm setIsVisible={setIsVisible}/>}
    </>
  );
}
