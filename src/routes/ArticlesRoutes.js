import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {AllArticles, ArticlePage, AddNewArticle} from 'pages';

export default function ArticlesRoutes() {
  return (
    <Routes>
      <Route index element={<AllArticles />} />
      <Route path=":id" element={<ArticlePage />} />
      <Route path="new" element={<AddNewArticle />} />
    </Routes>
  );
}
