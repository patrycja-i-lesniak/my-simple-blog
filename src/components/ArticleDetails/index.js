import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { onSnapshot, doc } from "firebase/firestore";

import { db, auth } from "firebaseConfig";
import { DeleteArticle, EditArticle, LikeButton, Comment } from "components";
import "./style.css";
import { useAuthState } from "react-firebase-hooks/auth";

export default function ArticleDetails() {
  const [article, setArticle] = useState(null);
  const [currentlyLoggedinUser] = useAuthState(auth);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const docRef = doc(db, "Articles", id);
    onSnapshot(docRef, (snapshot) => {
      setArticle({ ...snapshot.data(), id: snapshot.id });
    });
  }, []);

  return (
    article && (
      <>
        <Card className="card col-sm-12" key={id}>
          <Card.Img variant="top" src={article.imageUrl} />
          <Card.Body className="article__body">
            <div className="article__edit">
              {article?.userId === currentlyLoggedinUser?.uid && (
                <div className="article__icons--user">
                  <EditArticle id={id} imageUrl={article.imageUrl} />
                  <DeleteArticle id={id} imageUrl={article.imageUrl} />
                </div>
              )}
            </div>
            <Card.Title className="article__title">{article.title}</Card.Title>

            <Card.Text className="article__createdAt">
              Posted on: {article.createdAt.toDate().toDateString()}
            </Card.Text>

            <Card.Text className="article__description">{article.description}</Card.Text>
            <hr />
            <Card.Text>{article.articleBody}</Card.Text>
            <Card.Text className="article__author">
              Author: <span>{article.createdBy}</span>
            </Card.Text>

            <div className="d-flex my-5 justify-content-between">
              <Button className="m-0" variant="outline-info" onClick={() => navigate("/articles")}>
                Back to articles list
              </Button>

              <div className="d-flex align-items-center">
                {currentlyLoggedinUser && <LikeButton id={id} likes={article.likes} />}
                <p className="m-0 mx-3">
                  {article.likes.length} {article.likes.length === 1 ? "like" : "likes"}
                </p>

                {article?.comments?.length > 0 && (
                  <Button
                    variant="link"
                    onClick={() => navigate(`articles/${id}`)}
                    className="p-0 text-decoration-none text-secondary"
                  >
                    {article?.comments?.length}{" "}
                    {article?.comments?.length !== 1 ? "comments" : "comment"}
                  </Button>
                )}
              </div>
            </div>
            <Comment id={article.id} />
          </Card.Body>
        </Card>
      </>
    )
  );
}
