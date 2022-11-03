import React, { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { Button, Card } from "react-bootstrap";

import "./style.css";
import { db, useAuth } from "../../firebaseConfig";
import { DeleteArticle, EditArticle, ArticleDescription } from "components";


export default function Articles({ width }) {
  const [articles, setArticles] = useState([]);
  const [isVisible, setVisible] = useState(false);

  const currentUser = useAuth();

  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    });
  }, []);

  return (
    <div className="card__container">
      {articles.length === 0 ? (
        <p>No article found!</p>
      ) : (
        articles.map(({ id, title, author, imageUrl, description, createdAt, articleBody }) => (
          <Card className="card" key={id} style={{ width }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text className="card__created">{createdAt.toDate().toDateString()}</Card.Text>
              <ArticleDescription description={description} isVisible={isVisible}/>
              {isVisible && (
                <>
                  <Card.Text>{articleBody}</Card.Text>
                  <Card.Text className="card__author">
                    Author: <span>{author}</span>
                  </Card.Text>
                </>
              )}
              <div className="card__buttons">
                <Button variant="info" onClick={() => setVisible(!isVisible)}>
                  {isVisible ? "Show less" : " Show more"}
                </Button>

                {currentUser && (
                  <div className="card__buttons--optional">
                    <EditArticle id={id} imageUrl={imageUrl} />
                    <DeleteArticle id={id} imageUrl={imageUrl} />
                  </div>
                )}
              </div>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
}
