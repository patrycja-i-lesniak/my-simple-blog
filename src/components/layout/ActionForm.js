import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth, useAuth, createUser } from "config/firebase";
import { addUserData } from "config/firestore";

export default function ActionForm({ text }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const currentUser = useAuth();
  const navigate = useNavigate();

  const handleInput = (e) => {
    let newInput = { [e.target.name]: e.target.value };
    setData({ ...data, ...newInput });
  };

  //Sign up
  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    addUserData(data);
    createUser(data, navigate);
    setLoading(false);
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
        setError(true);
        console.log(error, "ERROR");
        console.log(err.code);
      });
    setLoading(false);
  };

  const onClickAction = (e) => {
    if (text === "Log in") {
      handleLogin(e);
    } else if (text === "Sign up") {
      handleSignup(e);
    }
  };

  return (
    <>
      {loading && (
        <>
          <Spinner animation="grow" variant="info">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </>
      )}
      <div>
        <h5 className="grey-text text-darken-3">{text}</h5>
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
              onClick={(e) => onClickAction(e)}
            >
              {text}
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}
