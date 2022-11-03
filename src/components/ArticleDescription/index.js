import React from "react";
import { Card } from "react-bootstrap";

export default function ArticleDescription({ isVisible, description }) {
  return (
    <>
      <Card.Text className="card__description">
        {isVisible ? <span>{description}</span> : <p>{ description }</p>}
      </Card.Text>
    </>
  );
}
