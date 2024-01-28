import React from "react";
import { Link } from "react-router-dom";
import "./../estilos/home.css";
import Logo from "../imagenes/img/logo.svg";

export const Home = () => {


    return(
        <> 
        <body>
        <div className="header inicio">
        <div className="contenedor contenido-header">
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
        <h1>Venta de Casas y Departamentos Exclusivos de Lujo</h1>
        </div>
        </div>
        <div className="contenedor-seccion">
            <h1>Mas Sobre Nosotros</h1>
            <div className="icono-nosotros">
                <div className="icono"></div>
            </div>
        </div>
        </body>
        </>
            )
        }