import React, { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebaseConfig";

import { Button, Card } from "react-bootstrap";

export default function Article() {
  const [articles, setArticles] = useState([]);

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
    <div>
      {articles.length === 0 ? (
        <p>No article found!</p>
      ) : (
        articles.map(({ id, title, author, imageUrl, description, createdAt, articleBody }) => (
          <Card key={id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text>{createdAt.toDate().toDateString()}</Card.Text>
              <Button variant="info">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
}
