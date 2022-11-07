import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { Button, Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";

import "./style.css";
import { db, auth } from "firebaseConfig";
import { LikeButton } from "components";

export default function Articles({ size }) {
  const [user] = useAuthState(auth);
  const [articles, setArticles] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
    });
  }, []);

  return (
    <div className=" card-columns justify-content-left ">
      {articles.length === 0 ? (
        <p>No article found!</p>
      ) : (
        articles
          .slice(0, size)
          .map(
            ({
              id,
              title,
              imageUrl,
              description,
              createdAt,
              articleBody,
              createdBy,
              userId,
              likes,
              comments,
            }) => (
              <Card className="card px-0 key={id}">
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text className="card__created">
                    {createdAt.toDate().toDateString()}
                  </Card.Text>
                  <Card.Text className="card__description">{description}</Card.Text>
                  <div className="d-flex align-items-center justify-content-between">
                    <Button
                      variant="info"
                      onClick={() => navigate(`/articles/${id}`, { replace: true })}
                      comments={comments}
                    >
                      read more
                    </Button>
                    <div className="d-flex justify-content-between align-items-center">
                      {user ? (
                        <LikeButton id={id} likes={likes} />
                      ) : (
                        <i
                          className="fa fa-heart fa-lg  "
                          cursor="pointer"
                          onClick={() => alert("Log in to add like")}
                        />
                      )}

                      <p className="p-2 m-0">{likes?.length} likes</p>
                    </div>

                    {comments?.length > 0 && (
                      <Button
                        variant="link"
                        onClick={() => navigate(`articles/${id}`)}
                        className="px-3 text-decoration-none text-secondary"
                      >
                        {comments?.length} {comments?.length !== 1 ? "comments" : "comment"}
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            )
          )
      )}
    </div>
  );
}
