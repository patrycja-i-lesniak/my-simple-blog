import React from "react";

import { Articles } from "components";

export default function AllArticles() {
  return (
    <div className="p-3 pb-5">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-10 col-xl-8">
          <Articles width="100%" />
        </div>
      </div>
    </div>
  );
}
