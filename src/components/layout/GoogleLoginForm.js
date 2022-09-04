import React, { useState } from "react";
import { Form, Image } from "react-bootstrap";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "config/firebase";

export default function GoogleLoginForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  let googleProvider = new GoogleAuthProvider();

  // Login with Google
  const handleLoginWithGoogle = (e) => {
    e.preventDefault();
    setLoading(!loading);
    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        console.log(userCredential.user);
        navigate("/profile");
      })
      .catch((err) => {
        setError(err.message);
        console.log(error);
      });
    setLoading(false);
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Log in with</Form.Label>
        <Image
          type="button"
          className="svg"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
          alt="google-logo"
          onClick={(e) => handleLoginWithGoogle(e)}
        />
      </Form.Group>
    </Form>
  );
}
