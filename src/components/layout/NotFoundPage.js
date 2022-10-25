import { useState, useEffect } from "react";
import {Spinner} from 'react-bootstrap'


export default function NotFoundPage ()  {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoading(false);
    }, 500);

    return () => clearInterval(intervalId);
  });

  return (
    <>
      {loading ? (
        <>
          <Spinner animation="grow" variant="info">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </>
      ) : (
        <>
        <h1>Not Found</h1>
        <p>"Please make sure that url address is correct" </p>
        </>
      )}
    </>
  );
};
