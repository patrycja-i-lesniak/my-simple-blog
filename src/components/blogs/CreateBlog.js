import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { app, db, blogRef, storage } from "../../config/firebaseConfig";
import { Button, Form } from "react-bootstrap";
import { IoMdSend } from "react-icons/io";
import { useAuth, upload } from "../../config/firebaseConfig";

export default function CreateRecipe() {
  const currentUser = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    author: "",
    photo: "",
    timestamp: serverTimestamp(),
  });
  const [photoURL, setPhotoURL] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFileChange = async (e) => {
    const file = e.target.file[0];
    const storageRef = app.storage().ref();

    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileURL(await fileRef.getDownloadURL());
  };

  function handleClick() {
    upload(formData, currentUser, setLoading);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  // useEffect(
  // 	() => {
  // 		if (currentUser && currentUser.photoURL) {
  // 			setPhotoURL(currentUser.photoURL);
  // 		}
  // 	},
  // 	[ currentUser ]
  // );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(blogRef, formData);

    setFormData(e.target.reset());
    console.log(`New article with ID ${docRef.id} added`);
    navigate("/");
  };

  return (
    <div className="form-container">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <h5>Create New Blog</h5>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" onChange={(e) => handleChange(e)} minLength="5" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="body">
          <Form.Label>Blog text</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            type="text"
            onChange={(e) => handleChange(e)}
            minLength="100"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="author">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" onChange={(e) => handleChange(e)} minLength="5" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="photo">
          <Form.Label>Photo</Form.Label>
          <Form.Control type="file" onChange={(e) => handleChange(e)} />
          <Button variant="btn btn-secondary" onClick={handleClick}>
            Upload photo
          </Button>
        </Form.Group>

        <Button variant="info" type="submit">
          Send <IoMdSend />
        </Button>
      </Form>
    </div>
  );
}
