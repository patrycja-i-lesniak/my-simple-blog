import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { toast } from "react-toastify";
import { FiTrash } from "react-icons/fi";

import { db, storage } from "../../firebaseConfig";

export default function DeleteArticle({ id, imageUrl }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      try {
        navigate("/");
        await deleteDoc(doc(db, "Articles", id));
        toast("Article deleted successfully", { type: "succes" });
        const storageRef = ref(storage, imageUrl);
        await deleteObject(storageRef);
      } catch (error) {
        toast("Error deleting article", { type: "error" });
        console.log(error);
      }
    }
  };

  return (
    <div>
      <FiTrash className="icon" onClick={handleDelete} />
    </div>
  );
}
