import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "firebaseConfig";
import { doc, updateDoc, arrayRemove, arrayUnion } from "firebase/firestore";

export default function LikeButton({ id, likes }) {
  const [user] = useAuthState(auth);
  const likesRef = doc(db, "Articles", id);

  const handleLike = () => {
    if (likes?.includes(user.uid)) {
      updateDoc(likesRef, {
        likes: arrayRemove(user.uid),
      })
        .then(() => {
          console.log("unliked");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      updateDoc(likesRef, {
        likes: arrayUnion(user.uid),
      })
        .then(() => {
          console.log("liked");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div>
      <i
        className={`fa fa-heart${!likes?.includes(user.uid) ? "-o" : ""} fa-lg`}
        style={{
          cursor: "pointer",
          color: likes?.includes(user.uid) ? "crimson" : null,
        }}
        onClick={handleLike}
      />
    </div>
  );
}
