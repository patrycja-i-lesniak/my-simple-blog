import React, { useState } from "react";
import { Button, Form,Alert } from "react-bootstrap";
import { upload } from "../../config/firebaseConfig";
import { auth, useAuth } from "../../config/firebase";

export default function UserDataForm() {
  const user = auth.currentUser;

  const currentUser = useAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const [additionalData, setAdditionalData] = useState({
    firstname: "",
    lastname: "",
  });
  const [alert, setAlert] = useState(false)

  function handleChange(e) {
    const item = e.target.files[0];
    const name = e.target.value;
    if (item) {
      setPhoto(item);
    }
  }

  const handleInput = (e) => {
    let newInput = { [e.target.name]: e.target.value };

    setAdditionalData({ ...additionalData, ...newInput });
  };

  function handleClick() {
    upload(photo, currentUser, setLoading);
    setAlert(true);
  }

  function handleAddData() {
    console.log("add data", additionalData);
    console.log(currentUser);
  }

  return (
    <>
      {alert ? (
        <Alert variant="success" className="alert">
          <Alert.Heading>Congrats!</Alert.Heading>
          <p>Uploaded file</p>
          <div className="d-flex justify-content-end">
            <Button variant="outline-success" onClick={() => setAlert(false)}>
              Back to login page
            </Button>
          </div>
        </Alert>
      ) : (
        <div className="form-container">
          <Form>
            <p>Uzupełnij swój profil:</p>
            <Form.Group className="mb-3" controlId="additional-data">
              <Form.Label>Imię</Form.Label>
              <Form.Control
                type="text"
                name="firstname"
                placeholder="Enter first name"
                onChange={(e) => handleInput(e)}
              />

              <Form.Label>Nazwisko</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                placeholder="Enter last name"
                onChange={(e) => handleInput(e)}
              />
            </Form.Group>{" "}
            <Button variant="btn btn-info" onClick={handleAddData}>
              Send
            </Button>
            <hr />
            <Form.Group className="mb-3" controlId="file">
              <Form.Control type="file" name="file" onChange={handleChange} />
            </Form.Group>
            <Button variant="btn btn-info" disabled={loading || !photo} onClick={handleClick}>
              Upload
            </Button>
          </Form>
        </div>
      )}
    </>
  );
}
