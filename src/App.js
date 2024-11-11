import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {Home} from "../src/paginas/home.js";
import {Nosotros} from "./paginas/nosotros.js";
import { Anuncios } from './paginas/anuncios.js';
import { Blogs } from './paginas/blogs.js';
import { Contacto } from './paginas/contacto.js';
import Footer from './paginas/footer.js';
import { Propiedades } from './compoenentes/propiedades.js';
import { Datos } from './paginas/form.js';


const App = ( ) => {

return (
  <div>

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/nosotros" element={<Interno />} />
    <Route path="/contacto" element={<Contacto />} />
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/anuncios" element={<publicidad />} />
    <Route path="/propiedades" element={<Propiedades />} />
    <Route path="/formulario" element={<RRSS />} />



    </Routes>

    <Footer/>
    
    </BrowserRouter>
  </div>

);


};

export default App;
