import React from "react";
import { Link } from "react-router-dom";
import "./../estilos/anuncios.css";
import Logo from "../imagenes/img/logo.svg";
import anuncio4 from "../imagenes/img/anuncio4.jpg";
import anuncio5 from "../imagenes/img/anuncio5.jpg";
import anuncio6 from "../imagenes/img/anuncio6.jpg";
import wc from "../imagenes/img/icono_wc.svg";
import estacionamiento from "../imagenes/img/icono_estacionamiento.svg";
import cuartos from "../imagenes/img/icono_dormitorio.svg";

export const Anuncios = () => {

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
                    <h2> Casas Y Departamentos en Venta</h2>

                    <div className="contenedor-anuncios">
                        <div className="anuncio">
                            <picture>
                                <img src={anuncio4} alt="anuncio"></img>
                            </picture>
                            <div className="contenido-anuncio">
                                <h3> Casa de Lujo en el Lago</h3>
                                <p>Casa en el Lago con excelente vista, acabados de lujo a un exclente precio</p>
                                <p className="precio"> 90.000.000</p>
                                <ul className="iconos-caracteristicas">
                                    <li>
                                        <img src={wc} alt="poceta"></img>
                                        <p>3</p>

                                    </li>
                                    <li>
                                        <img src={estacionamiento} alt="estacionamiento"></img>
                                        <p>3</p>

                                    </li>
                                    <li>
                                        <img src={cuartos} alt="cuartos"></img>
                                        <p>4</p>

                                    </li>

                                </ul>
                                <Link to="/anuncios" className="boton">Ver Propiedades</Link>
                            </div>
                        </div>
                        <div className="anuncio">
                            <picture>
                                <img src={anuncio5} alt="anuncio"></img>
                            </picture>
                            <div className="contenido-anuncio">
                                <h3> Casa Terminados de Lujo</h3>
                                <p>Casa en el Lago con excelente vista, acabados de lujo a un exclente precio</p>
                                <p className="precio"> 90.000.000</p>
                                <ul className="iconos-caracteristicas">
                                    <li>
                                        <img src={wc} alt="poceta"></img>
                                        <p>3</p>

                                    </li>
                                    <li>
                                        <img src={estacionamiento} alt="estacionamiento"></img>
                                        <p>3</p>

                                    </li>
                                    <li>
                                        <img src={cuartos} alt="cuartos"></img>
                                        <p>4</p>

                                    </li>

                                </ul>
                                <Link to="/anuncios" className="boton">Ver Propiedades</Link>
                            </div>
                        </div>
                        <div className="anuncio">
                            <picture>
                                <img src={anuncio6} alt="anuncio"></img>
                            </picture>
                            <div className="contenido-anuncio">
                                <h3> Casa con piscina</h3>
                                <p>Casa en el Lago con excelente vista, acabados de lujo a un exclente precio</p>
                                <p className="precio"> 90.000.000</p>
                                <ul className="iconos-caracteristicas">
                                    <li>
                                        <img src={wc} alt="poceta"></img>
                                        <p>3</p>

                                    </li>
                                    <li>
                                        <img src={estacionamiento} alt="estacionamiento"></img>
                                        <p>3</p>

                                    </li>
                                    <li>
                                        <img src={cuartos} alt="cuartos"></img>
                                        <p>4</p>

                                    </li>

                                </ul>
                                <Link to="/anuncios" className="boton">Ver Propiedades</Link>
                            </div>
                        </div>

                    </div>
        </div>
        </body>
        </>
            )
        }