import React from "react";
import { Card, Button } from "react-bootstrap";

import { useAuth } from "firebaseConfig";
import {DeleteArticle} from 'components';

export default function ArticleDetails({ id, imageUrl, title, description, createdAt }) {
  const currentUser = useAuth();
  return (
    <div>
      <Card className="card" key={id} style={{ width: "24rem" }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{createdAt.toDate().toDateString()}</Card.Text>
          <div className="card__buttons">
            <Button variant="info">read more</Button>
            {currentUser && <DeleteArticle id={id} imageUrl={imageUrl} />}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
