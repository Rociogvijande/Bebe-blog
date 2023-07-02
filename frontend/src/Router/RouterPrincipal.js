import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Titulo from "../components/Titulo";
import Navbar from "../components/Navbar";
import Volver from "../components/Volver"
import Footer from "../components/Footer";
import Post from "../components/Post"
import Nuevopost from "../components/Nuevopost";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div><Titulo /><Navbar /><Post /></div>} />
        <Route path="/nuevopost" element={<div><Titulo /><Volver /><Nuevopost/></div>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
