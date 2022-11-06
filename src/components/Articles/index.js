import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { Button, Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";

import "./style.css";
import { db, auth } from "firebaseConfig";
import { DeleteArticle, EditArticle, ArticleDescription, LikeButton } from "components";

export default function Articles({ width }) {
  const [user] = useAuthState(auth);
  const [articles, setArticles] = useState([]);
  const [isVisible, setVisible] = useState(false);

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
      console.log(articles);
    });
  }, []);

  return (
    <div className="card__container">
      {articles.length === 0 ? (
        <p>No article found!</p>
      ) : (
        articles.map(
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
            <Card className="card" key={id} style={{ width }}>
              <Card.Img variant="top" src={imageUrl} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text className="card__created">{createdAt.toDate().toDateString()}</Card.Text>
                <ArticleDescription description={description} isVisible={isVisible} />
                {isVisible && (
                  <>
                    <Card.Text>{articleBody}</Card.Text>
                    {createdBy && <Card.Text className="card__createdBy">{createdBy}</Card.Text>}
                  </>
                )}

                <div className="card__buttons">
                  <Button
                    variant="info"
                    // as={Link}
                    // to={`articles/${id}`}
                    // onClick={() => setVisible(!isVisible)}
                    onClick={() => navigate(`/articles/${id}`, { replace: true })}
                  >
                    {/* {isVisible ? "Show less" : " Show more"} */}
                    read more
                  </Button>

                  {/* {user && (
                    <div className="card__buttons--optional">
                      <EditArticle id={id} imageUrl={imageUrl} />
                      <DeleteArticle id={id} imageUrl={imageUrl} />
                    </div>
                  )} */}
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

                  {user?.uid === userId && (
                    <div className="card__icons--optional">
                      <EditArticle id={id} imageUrl={imageUrl} />
                      <DeleteArticle id={id} imageUrl={imageUrl} />
                    </div>
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
