import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form, Button } from "react-bootstrap";

import { auth } from "../../config/firebase";

export default function SignUp() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleInput = (e) => {
    let newInput = { [e.target.name]: e.target.value };

    setData({ ...data, ...newInput });
  };

  //Signup
  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response.user);
        navigate("/profile");
      })
      .catch((err) => {
        alert(err.message);
        console.log(err.code);
      });
    setLoading(false);
  };

  return (
    <div className="form-container">
      <h5 className="grey-text text-darken-3">Sign Up</h5>
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
            onClick={(e) => handleSignup(e)}
            disabled={loading || !user}
          >
            Sign up
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
