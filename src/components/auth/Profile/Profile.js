import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Form } from "react-bootstrap";

import { auth, useAuth } from "config/firebase";
import ProfileForm from "./ProfileForm";
import ProfileHeader from "./ProfileHeader";

export default function Profile() {
  const currentUser = useAuth();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/login");
  }

  return (
    <div className="fields-container">
      <ProfileHeader />
      {!currentUser && (
        <div className="fields-container">
          <p>Strona dostępna tylko po zalogowaniu</p>
          <Button variant="btn btn-info" onClick={handleSubmit}>
            Go to login page
          </Button>
        </div>
      )}
    </div>
  );
}
