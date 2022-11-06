import React from "react";
import { Form, Button } from "react-bootstrap";

export default function ContactForm() {
  return (
    <div className="form-container">
      <Form
        className="form__wrapper"
        action="https://formsubmit.co/patrycja.lesniak@gmail.com"
        method="POST"
      >
        <div className="mb-3">
          <h2 className="form__h4">Leave a contact</h2>
          <Form.Control
            type="hidden"
            name="_next"
            value="https://patrycja-i-lesniak.github.io/simple-vege-life/"
          />
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              className="form-control form__input"
              type="text"
              name="name"
              required
              aria-label="name input "
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              className="form-control form__input"
              type="text"
              name="phone"
              aria-label="phone input"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              required
              className="form-control form__input"
              aria-describedby="email form-input"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              type="text"
              minLength="100"
              className="form-control form__input"
              name="textarea"
              required
              aria-describedby="text input"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="checkbox">
            <Form.Check
              disabled
              type="checkbox"
              name="checkbox"
              required
              className="form__check-input"
              id="check"
            />
            <Form.Label htmlFor="check">
              Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych więcej...
            </Form.Label>
          </Form.Group>

          <Button variant="info" type="submit" className="form__button" aria-label="Send button">
            Send
          </Button>
        </div>
      </Form>
    </div>
  );
}
