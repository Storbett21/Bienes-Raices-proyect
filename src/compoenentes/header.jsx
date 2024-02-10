import React from "react";
import { Link } from "react-router-dom";

import Logo from "../imagenes/img/logo.svg";
import header from "../imagenes/img/header.jpg"
import cellmenu from "../imagenes/img/barras.svg";

export const Header = ({ titulo, mostrarImagenDeFondo, alturaMinima }) => {
  const headerStyle = {
    backgroundImage: mostrarImagenDeFondo ? `url(${header})` : 'none',
    minHeight: alturaMinima || "70rem",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundColor: "#333333",
    padding: "1rem 0 3rem 0",
  };

  return (
    <div style={{ ...headerStyle}}>
      <div className="contenedor contenido-header" style={{ minHeight: alturaMinima || "70rem" }}>
        <div className="barra">
          <Link to="/">
            <img src={Logo} alt="Logotipo de Bienes Raices"></img>
          </Link>
          <nav className="navegacion">
            <Link to="/nosotros" className="enlace">
              Nosotros
            </Link>
            <Link to="/anuncios" className="enlace">
              Anuncios
            </Link>
            <Link to="/blogs" className="enlace">
              Blogs
            </Link>
            <Link to="/contacto" className="enlace">
              Contacto
            </Link>
          </nav>
        </div>
        <h1>{titulo}</h1>
      </div>
    </div>
  );
};
