import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert, Image } from "react-bootstrap";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth, useAuth } from "config/firebase";

export default function Login() {
  const currentUser = useAuth();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  let googleProvider = new GoogleAuthProvider();

  const handleInput = (e) => {
    let newInput = { [e.target.name]: e.target.value };

    setData({ ...data, ...newInput });
  };

  // Login
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, data.email, data.password)
       .then((userCredential) => {
         navigate("/profile");
       })
       .catch((err) => {
         setError(err.message);
         console.log(err.code);
       });
    setLoading(false);
  };

  // Login with Google
  const handleLoginWithGoogle = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        console.log(userCredential.user);
        navigate("/profile");
      })
      .catch((err) => {
        setError(err.message);
        console.log(err.message);
      });
    setLoading(false);
  };

  return (
    <>
      {error ? (
        <Alert variant="danger" className="alert">
          <Alert.Heading>Error!</Alert.Heading>
          <Form.Paragraph>Invalid email or password.</Form.Paragraph>
          <Form.Div className="d-flex justify-content-end">
            <Button variant="outline-danger" onClick={() => setError(false)}>
              Back to login page
            </Button>
          </Form.Div>
        </Alert>
      ) : (
        <div className="form-container">
          <h5 className="grey-text text-darken-3">Log in</h5>
          <Form>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>
                Email <span>*</span>
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={(e) => handleInput(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>
                Password <span>*</span>
              </Form.Label>
              <Form.Control
                placeholder="Enter password"
                name="password"
                type="password"
                className="input-fields"
                onChange={(e) => handleInput(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Text className="text-muted">
                <span>*</span> Field required.
              </Form.Text>
            </Form.Group>
            <Form.Group className="d-grid d-md-flex justify-content-md-end">
              <Button
                variant="info"
                type="submit"
                disabled={currentUser}
                onClick={(e) => handleLogin(e)}
              >
                Log in
              </Button>
            </Form.Group>
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
        </div>
      )}
    </>
  );
}
