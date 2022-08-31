import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import { auth, createUser } from "config/firebase";
import { addUserData} from "config/firestore";

export default function SignUp() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
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
          <Button variant="info" type="submit" onClick={(e) => handleSignup(e)}>
            Sign up
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
