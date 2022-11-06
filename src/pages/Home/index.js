import React from "react";
import { Articles, ControlledCarousel } from "components";

export default function Home() {


  return (
    <div className="pb-5">
      <ControlledCarousel />
      <div className="row justify-content-center ">
        <div className="col-md-8 ">
          <h1>Recent articles</h1>
          <Articles size='5'/>
        </div>
      </div>
    </div>
  );
}
