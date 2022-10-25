import React from 'react';

export default function Mailto({ email, subject, body, ...props }) {
  return (
    <a className='mailMe' href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>{props.children}</a>
  );
}
