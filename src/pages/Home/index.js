import React from "react";
import { BlogList } from "components";
import { Slider } from "components";

export default function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <Slider />
      <BlogList />
    </div>
  );
}
