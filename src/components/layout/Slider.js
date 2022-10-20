import React from 'react';
import {Row, Col} from "react-bootstrap";

import photo1 from "assets/photo-1.jpg";
import photo2 from "assets/photo-2.jpg";
import photo3 from "assets/photo-3.jpg";
import photo4 from "assets/photo-4.jpg";

export default function Slider() {
	return (

      <div className="carousel">
        <Row>
          <Col sm >
            <img className="carousel__image" src={photo1} alt="photo1" />
          </Col>
         <Col sm >
            <img className="carousel__image" src={photo2} alt="photo1" />
          </Col>
         <Col sm >
            <img className="carousel__image" src={photo3} alt="photo1" />
          </Col>
         <Col sm >
            <img className="carousel__image" src={photo4} alt="photo1" />
          </Col>
        </Row>
      </div>
  );
}
