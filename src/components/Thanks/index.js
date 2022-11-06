import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Thanks() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-8 ">
          <p>Thank you for your message</p>
          <Button variant="info" onClick={handleSubmit}>
            Go to Home page
          </Button>
        </div>{" "}
      </div>{" "}
    </div>
  );
}
