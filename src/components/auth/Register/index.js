import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useAuth, auth } from "firebaseConfig";
import "../style.css";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const currentUser = useAuth();
  const navigate = useNavigate();

  const handleSignup = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast("User added successfully", { type: "success" });
      updateProfile(auth.currentUser, { displayName: name });
      navigate("/", { replace: true });
    } catch (error) {
      toast(error.code, { type: "error" });
    }
    setLoading(false);
  };

  return (
    <>
      {loading && (
        <div className="spinner-container">
          <Spinner animation="grow" variant="info">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      <div className="form-container">
        <div>
          <h5 className="grey-text text-darken-3">Sign up</h5>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>
                Name <span>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>
                Email <span>*</span>
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>
                Password <span>*</span>
              </Form.Label>
              <Form.Control
                placeholder="Enter password min 8 signs"
                name="password"
                type="password"
                className="input-fields"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>
                  Confirm password <span>*</span>
                </Form.Label>
                <Form.Control
                  ref={passwordRef}
                  placeholder="Confirm password"
                  name="confirmPassword"
                  type="password"
                  className="input-fields"
                />
              </Form.Group> */}
            <Form.Group className="mb-3">
              <Form.Text className="text-muted">
                <span>*</span> Field required.
              </Form.Text>
            </Form.Group>
            <Form.Group className="d-grid d-md-flex justify-content-md-end">
              <Button variant="info" disabled={loading || currentUser} onClick={handleSignup}>
                Sign up
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
}
