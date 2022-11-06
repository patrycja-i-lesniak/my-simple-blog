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
  const [user] = useAuthState(auth);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const docRef = doc(db, "Articles", id);
    onSnapshot(docRef, (snapshot) => {
      setArticle({ ...snapshot.data(), id: snapshot.id });
    });
  }, []);

  return (
    <div className="article__wrapper">
      {article && (
        <>
          <Card className="card " key={id}>
            <Card.Img variant="top" src={article.imageUrl} />
            <Card.Body className="article__body">
              <div className="article__edit">
                {user && (
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

              <div className="article__icons mb-4">
                <Button
                  className="m-3 mx-0"
                  variant="outline-info"
                  onClick={() => navigate("/articles")}
                >
                  Back to articles list
                </Button>
                <div className="article__likes">
                  {user && <LikeButton id={id} likes={article.likes} />}
                  <p>{article.likes.length}</p>
                </div>
              </div>
              <Comment id={article.id} />
            </Card.Body>
          </Card>
        </>
      )}
    </div>
  );
}
