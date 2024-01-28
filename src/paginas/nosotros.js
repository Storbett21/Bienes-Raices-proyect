import React from "react";
import { Link } from "react-router-dom";
import "./../estilos/nosotros.css";
import Logo from "../imagenes/img/logo.svg";

export const Nosotros = () => {
    return(
        <> 
        <body>
        <div className="header1">
        <div className="contenedor1 contenido-header1">
            <div className="barra">
                <Link to="/">
             <img src={Logo} alt= "Logotipo de Bienes Raices"></img>
             </Link>
             <nav className="navegacion">
                <Link to="/nosotros" className="enlace">Nosotros</Link>
                <Link to="/anuncios" className="enlace">Anuncios</Link>
                <Link to="/blogs" className="enlace">Blogs</Link>
                <Link to="/contacto" className="enlace">Contacto</Link>
             </nav>
            </div>
        </div>
        </div>
        <div className="contenedor-seccion">
            <h1>Nosotros</h1>
        </div>
        </body>
        </>
            )
        }