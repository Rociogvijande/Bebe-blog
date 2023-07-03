import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Titulo from "../components/Titulo";
import Navbar from "../components/Navbar";
import Volver from "../components/Volver"
import Footer from "../components/Footer";
import Post from "../components/Post"
import Nuevopost from "../components/Nuevopost";
import PostIndividual from "../components/PostIndividual";
import PostEditado from "../components/PostEditado";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div><Titulo /><Navbar /><Post /> <Footer/> </div>} />
        <Route path="/nuevopost" element={<div><Titulo /><Volver /><Nuevopost/> <Footer/></div>} />
        <Route path="/posts/:id" element={<div><Titulo /><Volver /><PostIndividual /> <Footer/></div>} />
        <Route path="/posts/editar/:id" element={<div><Titulo /><Volver /><PostEditado /> <Footer/></div>} />
        


      </Routes>
    </BrowserRouter>
  );
};

export default App;
