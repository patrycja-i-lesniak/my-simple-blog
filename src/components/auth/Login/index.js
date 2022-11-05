import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth, auth } from "firebaseConfig";
import { toast } from "react-toastify";

import { GoogleLoginForm } from "components";

export default function Login() {
  const [loading, setLoading] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const currentUser = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/", { replace: true });
    } catch (error) {
      toast(error.code, { type: "error" });
    }
    setLoading(false);
  };

  return (
    <div className="form-container">
      <div>
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
              onChange={(e) => setEmail(e.target.value)}
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
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Text className="text-muted">
              <span>*</span> Field required.
            </Form.Text>
          </Form.Group>
          <Form.Group className="d-grid d-md-flex justify-content-md-end">
            <Button variant="info" disabled={loading || currentUser} onClick={handleLogin}>
              Log in
            </Button>
          </Form.Group>
        </Form>
      </div>

      <GoogleLoginForm />
    </div>
  );
}
