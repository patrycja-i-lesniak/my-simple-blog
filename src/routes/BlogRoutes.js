import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Blogs, Blog, AddBlog} from 'pages';

export default function BlogRoutes() {
  return (
    <Routes>
      <Route index element={<Blogs />} />
      <Route path=":id" element={<Blog />} />
      <Route path="new" element={<AddBlog />} />
    </Routes>
  );
}
