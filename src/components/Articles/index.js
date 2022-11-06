import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { Button, Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";

import "./style.css";
import { db, auth } from "firebaseConfig";
import { LikeButton } from "components";

export default function Articles({size}) {
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
        articles.slice(0, size).map(
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
            <div className="col-sm-12" key={id}>
              <Card className="card px-0">
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text className="card__created">
                    {createdAt.toDate().toDateString()}
                  </Card.Text>
                  <Card.Text className="card__description">{description}</Card.Text>
                  <div className="card__buttons">
                    <Button
                      variant="info"
                      onClick={() => navigate(`/articles/${id}`, { replace: true })}
                    >
                      read more
                    </Button>
                  </div>
                  <div className="card__iconsContainer">
                    <div className="d-flex ">
                      {user ? (
                        <LikeButton id={id} likes={likes} />
                      ) : (
                        <i
                          className="fa fa-heart  fa-lg"
                          cursor="pointer"
                          onClick={() => alert("Log in to add like")}
                        />
                      )}
                      <div className="pe-2 px-3">
                        <p>{likes?.length} likes</p>
                      </div>
                      {comments?.length > 0 && <p className="px-3">{comments?.length} comments</p>}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          )
        )
      )}
    </div>
  );
}
