import React from "react";
import { Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// components
import { NotFoundPage, Register, Footer, Submenu, MainMenu } from "components";
import { Home, About, Contact } from "pages";
import { ArticlesRoutes, SignInRoutes } from "routes";


function App() {

  return (
    <>
      <header>
        <MainMenu />
      </header>

      <Submenu />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles/*" element={<ArticlesRoutes />} />
          <Route path="/signin/*" element={<SignInRoutes />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
