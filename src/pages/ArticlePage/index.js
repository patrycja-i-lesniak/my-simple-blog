import React from "react";
import { useParams } from "react-router-dom";
import { ArticleDetails } from "components";

export default function ArticlePage() {
  const { id } = useParams();

  return (
    <div className="pb-5">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-10 col-xl-8 p-0">
          <ArticleDetails id={id} />
        </div>
      </div>
    </div>
  );
}
