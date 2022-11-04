import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, ProgressBar } from "react-bootstrap";
import { MdPublishedWithChanges } from "react-icons/md";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

import { storage, db, auth } from "firebaseConfig";
import "./style.css";

export default function AddArticle() {
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    createdAt: Timestamp.now().toDate(),
    articleBody: "",
  });

  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleImageChange(e) {
    setFormData({ ...formData, image: e.target.files[0] });
  }

  const handlePublish = () => {
    if (!formData.title || !formData.description || !formData.articleBody) {
      alert("Please fill all the fields");
      return;
    }

    const storageRef = ref(storage, `/images/${Date.now()}${formData.image.name}`);

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "stage_changed",
      (snapshot) => {
        const progressPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progressPercent);
      },
      (error) => {
        console.log(error);
      },
      () => {
        setFormData({
          title: "",
          description: "",
          image: "",
          articleBody: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "Articles");
          addDoc(articleRef, {
            title: formData.title,
            description: formData.description,
            articleBody: formData.articleBody,
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
            createdBy: user.displayName,
            userId: user.uid,
            likes: [],
            comments: [],
          })
            .then(() => {
              toast("Article added successfully", { type: "succes " });
              setProgress(100);
              navigate("/");
            })
            .catch((eror) => {
              toast("Error adding article", { type: "error" });
            });
        });
      }
    );
  };

  return (
    <div className="form-container">
      {!user ? (
        <div className="form__info">
          <div className="form__login">
            <Button variant="info" onClick={() => navigate("/login")}>
              Login to create an article
            </Button>
          </div>

          <div>
            Don't have an account? <Link to="/register">Signup</Link>
          </div>
        </div>
      ) : (
        <Form>
          <h5>Add new article</h5>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              minLength="5"
              required
              onChange={(e) => handleChange(e)}
              name="title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description </Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              type="text"
              maxLength="300"
              // required
              onChange={(e) => handleChange(e)}
              name="description"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="articleBody">
            <Form.Label>Article Body</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              type="text"
              minLength="100"
              // required
              onChange={(e) => handleChange(e)}
              name="articleBody"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Add image</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={(e) => handleImageChange(e)} />
          </Form.Group>

          {/* {progress === 0 ? null : ( */}

          <ProgressBar
            className="publish"
            variant="info"
            now={`uploading image ${progress}%`}
            label={`${progress}%`}
          />

          {/* )} */}

          <Form.Group className="add__button">
            <Button variant="info" onClick={handlePublish}>
              Publish Article <MdPublishedWithChanges />
            </Button>
          </Form.Group>
        </Form>
      )}
    </div>
  );
}
