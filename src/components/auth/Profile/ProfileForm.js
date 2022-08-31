import { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { serverTimestamp } from "firebase/firestore";
import { getAuth, updateProfile } from "firebase/auth";

import { updateUserData } from "config/firestore";


export default function ProfileForm() {
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    displayName: "",
    photoURL: "",
    timestamp: serverTimestamp(),
  });

  const auth = getAuth();
  const currentUser = auth.currentUser;

  function handleChange(e) {
    const photo = e.target.files[0];
    const displayName = e.target.value;
    if (photo) {
      setPhoto(photo);
    }
  }

  const handleInput = (e) => {
    let newInput = { [e.target.name]: e.target.value };
    setUser({ ...user, ...newInput });
  };

  function handleClick(e) {
    updateUserData(photo, currentUser, setLoading, user);
    setAlert(true);
    console.log("Your profile has been updated");
  }

  return (
    <>
      {alert ? (
        <Alert variant="success" className="alert">
          <Alert.Heading>Congrats!</Alert.Heading>
          <p>Your profile has been updated</p>
          <div className="d-flex justify-content-end">
            <Button variant="outline-success" onClick={() => setAlert(false)}>
              Back to profile page
            </Button>
          </div>
        </Alert>
      ) : (
        <div className="form-container">
          <h5>Complete your profile:</h5>
          <Form className="distance" onSubmit={(e) => handleClick(e)}>
            <Form.Group className="mb-3" controlId="displayName">
              <Form.Label>
                User name <span>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="displayName"
                required
                minLength='5'
                placeholder="Enter user name"
                onChange={(e) => handleInput(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="file">
              <Form.Label>
                Add avatar <span>*</span>
              </Form.Label>
              <Form.Control type="file" name="file" onChange={handleChange} />
            </Form.Group>{" "}
            <Form.Group className="mb-3">
              <Form.Text className="text-muted">
                <span>*</span> Field required.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Button className="button" type="submit" variant="btn btn-info" disabled={loading}>
                Upload user data
              </Button>
            </Form.Group>
          </Form>
        </div>
      )}
    </>
  );
}
