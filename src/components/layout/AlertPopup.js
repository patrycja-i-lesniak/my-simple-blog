import React from 'react';
import {Alert, Form, Button} from 'react-bootstrap';

function AlertPopup(setError) {

  return (
    <Alert variant="danger" className="alert">
      <Alert.Heading>Error!</Alert.Heading>
      <Form.Paragraph>Invalid email or password.</Form.Paragraph>
      <Form.Div className="d-flex justify-content-end">
        <Button variant="outline-danger" onClick={() => setError(false)}>
          Back to login page
        </Button>
      </Form.Div>
    </Alert>
  );
}

export default AlertPopup
