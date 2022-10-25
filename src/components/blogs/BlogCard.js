import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { app, useAuth } from '../../config/firebaseConfig';
// import { handleEdit, handleDelete } from 'helpers';
import Card from "react-bootstrap/Card";


export default function BlogCard({ blog }) {
  const [photoURL, setPhotoURL] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );

  useEffect(() => {
    if (blog && blog.photoURL) {
      setPhotoURL(blog.photoURL);
    }
  }, []);


  return (
    <>
      <div>
        <Card style={{ width: "400px" }}>
          {blog.photoURL ? <img variant="top" src={blog.photoURL} alt="blogPhoto" /> : null}
          <Card.Body>
            <Card.Title>{blog.title}</Card.Title>
            <Card.Text>{blog.body}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href={`blogs/${blog.id}`} blog={blog}>
              read more
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </>
    // <div
    // 	actions={[
    // 		<div className="button-container">
    // 			<div>
    // 				<button
    // 					onClick={handleNavigate}
    // 					node="button"
    // 					waves="light"
    // 					className="btn transparent z-depth-0 orange-text text-darken-3 card-btn action-button"
    // 				>
    // 					Read more
    // 				</button>
    // 			</div>
    // 			{currentUser && (
    // 				<div>
    // 					<button
    // 						className="btn transparent z-depth-0 action-button"
    // 						node="button"
    // 						waves="light"
    // 						onClick={() => handleDelete(blog.id)}
    // 					>
    // 						<i className="orange-text">delete</i>
    // 					</button>
    // 					<button
    // 						className="btn transparent z-depth-0 action-button"
    // 						node="button"
    // 						waves="light"
    // 						onClick={() => handleEdit(blog.id)}
    // 					>
    // 						<i className="orange-text">edit</i>
    // 					</button>
    // 				</div>
    // 			)}
    // 		</div>
    // 	]}
    // 	closeIcon={<i>close</i>}
    // 	header={
    // 		<div>
    // 			<i src="https://materializecss.com/images/sample-1.jpg"/>
    // 			<p>{blog.title}</p>
    // 		</div>

    // 	}
    // 	revealIcon={<i>more_vert</i>}
    // >
    // 	{/* {blog.body.slice(0, 50)}... */}
    // 	{blog.body}...
    // </div>
  );
}
