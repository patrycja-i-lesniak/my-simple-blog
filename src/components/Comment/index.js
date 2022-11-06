import React, { useState, useEffect } from "react";
import { Form, Card, Col, Row } from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import { FiTrash } from "react-icons/fi";

import { arrayRemove, arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db, auth } from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

export default function Comment({ id }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [currentlyLoggedinUser] = useAuthState(auth);
  const commentRef = doc(db, "Articles", id);

  useEffect(() => {
    const docRef = doc(db, "Articles", id);
    onSnapshot(docRef, (snapshot) => {
      setComments(snapshot.data().comments);
    });
  }, []);

  const handleChangeComment = (e) => {
    // e.preventDefault();
    if (e.key === "Enter") {
      updateDoc(commentRef, {
        comments: arrayUnion({
          user: currentlyLoggedinUser.uid,
          userName: currentlyLoggedinUser.displayName,
          comment: comment,
          createdAt: new Date(),
          commentId: uuidv4(),
        }),
      }).then(() => {
        setComment("");
      });
    }
  };

  const handleDeleteComment = (comment) => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      updateDoc(commentRef, {
        comments: arrayRemove(comment),
      })
        .then(() => {
          console.log("Comment with ID", comment.commentId, "has been removed");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      {currentlyLoggedinUser ? (
        <div className="mb-5">
          <h3>Add comment:</h3>
          <Form>
            <Form.Control
              className="bg-light"
              type="text"
              as="textarea"
              placeholder="add some comment"
              rows={5}
              maxLength="1000"
              name="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyUp={(e) => {
                handleChangeComment(e);
              }}
            />
          </Form>
        </div>
      ):(<>
      <p><NavLink to='/login'>Log in</NavLink> to add comment</p></>)}

      <div className="my-5">
        {comments.length===0 && <h4>All comments:</h4>}
        {comments !== null &&
          comments.map(({ commentId, user, comment, userName, createdAt }) => (
            <>
              <Card key={commentId}>
                <Card.Body>
                  <Row>
                    <Col xs={1}>
                      <Card.Title>
                        {" "}
                        <span
                          className={`badge ${
                            user === currentlyLoggedinUser?.uid ? "bg-success" : "bg-secondary"
                          }`}
                        >
                          {userName}
                        </span>
                      </Card.Title>
                    </Col>
                    <Col xs={10}>
                      <Card.Subtitle
                        className="p-3 text-muted"
                        style={{ fontSize: 12, padding: "20px 0 10px" }}
                      >
                        {createdAt.toDate().toDateString()}
                      </Card.Subtitle>
                    </Col>

                    <Col xs={1}>
                      {user === currentlyLoggedinUser?.uid && (
                        <FiTrash
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            handleDeleteComment({ commentId, user, comment, userName, createdAt })
                          }
                        />
                      )}
                    </Col>
                  </Row>

                  <Card.Text style={{ fontSize: 14, color: "grey" }}>{comment}</Card.Text>
                </Card.Body>
              </Card>
            </>
          ))}
      </div>
    </div>
  );
}
