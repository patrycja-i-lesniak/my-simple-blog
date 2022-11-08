import React from "react";
import { ContactForm } from "components";

export default function Contact() {
  return (
    <div className="p-3 pb-5">
      <div className="row justify-content-center m-3">
        <div className="col-sm-10 col-md-9 col-lg-8  col-xl-6 bg-light rounded-lg px-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
