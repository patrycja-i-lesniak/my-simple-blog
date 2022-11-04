import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { onSnapshot, doc } from "firebase/firestore";

import { useAuth, db } from "firebaseConfig";
import { DeleteArticle, EditArticle } from "components";
import "./style.css";

export default function ArticleDetails() {
  const [article, setArticle] = useState(null);
  const { id } = useParams();
  const currentUser = useAuth();
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
        <Card className="card" key={id} style={{ width: "100%", maxWidth:1000 }}>
          <Card.Img variant="top" src={article.imageUrl} />
          <Card.Body className='article__body'>
            <Card.Title className="article__title">{article.title}</Card.Title>
            <Card.Text className='article__createdAt'>
              Posted on: {article.createdAt.toDate().toDateString()}
            </Card.Text>
            <Card.Text className="article__description">{article.description}</Card.Text>
            <hr/>
            <Card.Text>{article.articleBody}</Card.Text>
            <Card.Text>
              Author: <span>{article.createdBy}</span>
            </Card.Text>

            <div className="article__icons">
              <Button variant="outline-info" onClick={() => navigate('/articles')}>
                Go back
              </Button>
              {/* <Button variant="info">read more</Button> */}
              {currentUser && (
                <div className="article__icons--user">
                  <EditArticle id={id} imageUrl={article.imageUrl} />
                  <DeleteArticle id={id} imageUrl={article.imageUrl} />
                </div>
              )}
            </div>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
