import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { onSnapshot, doc } from "firebase/firestore";

import { db, auth } from "firebaseConfig";
import { DeleteArticle, EditArticle, LikeButton} from "components";
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
  });
  return (
    <div className="wrapper">
      {article && (
        <Card className="card" key={id} style={{ width: "100%", maxWidth: 1000 }}>
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

            <div className="article__icons">
              <Button variant="outline-info" onClick={() => navigate("/articles")}>
                Go back
              </Button>
              <div className="article__likes">
                {user && <LikeButton id={id} likes={article.likes} />}
                <p>{article.likes.length}</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
