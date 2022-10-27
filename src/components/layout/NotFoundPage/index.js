import { useState, useEffect } from "react";
import {Spinner} from 'react-bootstrap';

import notFound from 'assets/notFound.png';
import './style.css';


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
        <div className='notFound__container' >
        <img src={notFound} alt='404' className='notFound__image'/>
        </div>
      )}
    </>
  );
};
