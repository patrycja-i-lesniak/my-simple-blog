import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";

import { useAuth } from "config/firebaseConfig";
import ProfileHeader from "./ProfileHeader";

export default function Profile() {
  const currentUser = useAuth();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/signin");
  }

  return (
    <div className="fields-container">
      {loading && (
        <>
          <Spinner animation="grow" variant="info">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </>
      )}
      <ProfileHeader />
      {!currentUser && (
        <div className="fields-container">
          <p>That page is available only after logging in.</p>
          <Button variant="btn btn-info" onClick={handleSubmit}>
            Go to login page
          </Button>
        </div>
      )}
    </div>
  );
}
