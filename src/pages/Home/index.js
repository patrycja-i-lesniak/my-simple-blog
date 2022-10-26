import React from "react";
import { BlogList, ControlledCarousel } from "components";

export default function Home() {
  return (
    <div>
      <ControlledCarousel/>
      <BlogList />
    </div>
  );
}
