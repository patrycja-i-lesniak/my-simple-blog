import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// components
import { NotFoundPage, SignUp, Footer, SearchBox, Submenu, MainMenu } from "components";
import { Home, About, Contact } from "pages";
import { BlogRoutes, SignInRoutes } from "routes";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  function toggleIsVisible() {
    setIsVisible(!isVisible);
  }
  return (
    <>
      <MainMenu />
      {!isVisible && <SearchBox isVisible={isVisible} toggleIsVisible={toggleIsVisible} />}
      <Submenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs/*" element={<BlogRoutes />} />
        <Route path="/signin/*" element={<SignInRoutes />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
