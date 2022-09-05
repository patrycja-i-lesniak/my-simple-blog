import { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { serverTimestamp } from "firebase/firestore";
import { useAuth } from "config/firebase";

import { updateUserData } from "config/firestore";

export default function ProfileForm({ setIsVisible }) {
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [isFormVisible, setFormVisible] = useState(true);

  const [user, setUser] = useState({
    email: "",
    password: "",
    displayName: "",
    photoURL: "",
    timestamp: serverTimestamp(),
  });

  const currentUser = useAuth();

  function handleFileChange(e) {
    const photo = e.target.files[0];
    if (photo) {
      setPhoto(photo);
    }
  }

  function handleInputChange(e) {
    const displayName = { [e.target.name]: e.target.value };

    setUser({ ...user, ...displayName });
  }

  function handleClick(e) {
    e.preventDefault();
    updateUserData(photo, currentUser, setLoading, user);
    setFormVisible(!isFormVisible);
    setIsVisible(true)
    setAlert(true);
  }

  return (
    <>
      {/* {alert ? (
        <Alert variant="success" className="alert">
          <Alert.Heading>Congrats!</Alert.Heading>
          <p>Your profile has been updated</p>
          <div className="d-flex justify-content-end">
            <Button variant="outline-success" onClick={() => setAlert(false)}>
              Back to profile page
            </Button>
          </div>
        </Alert>
      ) : ( */}
      {isFormVisible && (
        <div className="form-container">
          <h5>Complete your profile:</h5>
          <Form className="distance" onSubmit={handleClick}>
            <Form.Group className="mb-3" controlId="displayName">
              <Form.Label>
                User name <span>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="displayName"
                minLength="3"
                required
                placeholder="Enter user name"
                onChange={(e) => handleInputChange(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="file">
              <Form.Label>Add avatar</Form.Label>
              <Form.Control type="file" name="file" onChange={(e) => handleFileChange(e)} />
            </Form.Group>{" "}
            <Form.Group className="mb-3">
              <Form.Text className="text-muted">* Fields required</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Button
                className="button"
                type="submit"
                variant="btn btn-info"
                disabled={loading || !user.displayName}
              >
                Upload user data
              </Button>
            </Form.Group>
          </Form>
        </div>
      )}
      {/* )} */}
    </>
  );
}
