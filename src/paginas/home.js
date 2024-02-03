import React from "react";
import { Link } from "react-router-dom";
import "./../estilos/home.css";
import Logo from "../imagenes/img/logo.svg";
import icono1 from "../imagenes/img/icono1.svg";
import icono2 from "../imagenes/img/icono2.svg";
import icono3 from "../imagenes/img/icono3.svg";
import anuncio1 from "../imagenes/img/anuncio1.jpg";
import anuncio2 from "../imagenes/img/anuncio2.jpg";
import anuncio3 from "../imagenes/img/anuncio3.jpg";
import wc from "../imagenes/img/icono_wc.svg";
import estacionamiento from "../imagenes/img/icono_estacionamiento.svg";
import cuartos from "../imagenes/img/icono_dormitorio.svg";
import Blog1 from "../imagenes/img/blog1.jpg";
import Blog2 from "../imagenes/img/blog2.jpg";


export const Home = () => {


    return (
        <>
            <body>
                <div className="header inicio">
                    <div className="contenedor contenido-header">
                        <div className="barra">
                            <Link to="/">
                                <img src={Logo} alt="Logotipo de Bienes Raices"></img>
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
                        <div className="icono">
                            <img src={icono1} alt="candado"></img>
                            <h3> Seguridad
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ornare orci. Suspendisse dictum lacus in blandit sodales. Mauris vitae nisi metus. Sed id euismod tortor, nec sollicitudin tellus. Proin eget efficitur mi. Nam dictum tincidunt vehicula. Suspendisse molestie quam magna, id pulvinar erat aliquam at. Ut suscipit dui ut nisl elementum mattis. </p>
                            </h3></div>
                        <div className="icono">
                            <img src={icono2} alt="precio"></img>
                            <h3>Precio
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ornare orci. Suspendisse dictum lacus in blandit sodales. Mauris vitae nisi metus. Sed id euismod tortor, nec sollicitudin tellus. Proin eget efficitur mi. Nam dictum tincidunt vehicula. Suspendisse molestie quam magna, id pulvinar erat aliquam at. Ut suscipit dui ut nisl elementum mattis. </p>
                            </h3> </div>
                        <div className="icono">
                            <img src={icono3} alt="tiempo"></img>
                            <h3>Tiempo
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ornare orci. Suspendisse dictum lacus in blandit sodales. Mauris vitae nisi metus. Sed id euismod tortor, nec sollicitudin tellus. Proin eget efficitur mi. Nam dictum tincidunt vehicula. Suspendisse molestie quam magna, id pulvinar erat aliquam at. Ut suscipit dui ut nisl elementum mattis. </p>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="seccion contenedor">
                    <h2> Casas Y Departamentos en Venta</h2>

                    <div className="contenedor-anuncios">
                        <div className="anuncio">
                            <picture>
                                <img src={anuncio1} alt="anuncio"></img>
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
                                <img src={anuncio2} alt="anuncio"></img>
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
                                <img src={anuncio3} alt="anuncio"></img>
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
                    <div className="ver-todas">

                        <Link to="/anuncios" className="boton-verde"> Ver Todas</Link>

                    </div>
                   </div>
                   <section className="imagen-contacto">
                        <h2>Encuentra la casa de tus Sueños</h2>
                        <p> LLena el Formulario de contacto y un asesor se pondra en contacto contigo a la brevedad</p>
                        <Link to="/contacto" className="boton-amarillo">Contactanos</Link>
                    </section>
                    <div className="contenedor seccion seccion-inferior">
                        <section className="blog">
                            <h3>Nuestro Blog</h3>

                            <article className="entrada-blog">
                                <div className="imagen">
                                    <picture>
                                        <img src={Blog1} alt="Texto Entrada Blog"></img>
                                    </picture>
                                </div>
                                <div className="texto-entrada">
                                    <Link to="/blogs" className="a">
                                        <h4>Terraza en el Techo de tu Casa</h4>
                                        <p>Escrito el: <span>20/10/2024</span> por <span> Admin</span></p>
                                        <p>
                                            Consejos para construir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinnero
                                        </p>
                                    </Link>

                                </div>

                            </article>
                            
                            <article className="entrada-blog">
                                <div className="imagen">
                                    <picture>
                                        <img src={Blog2} alt="Texto Entrada Blog"></img>
                                    </picture>
                                </div>
                                <div className="texto-entrada">
                                    <Link to="/blogs"className="a">
                                        <h4>Guia Para la Decoracion de tu hogar</h4>
                                        <p>Escrito el: <span>20/10/2024</span> por <span> Admin</span></p>
                                        <p>
                                            Maximiza el espacio de tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio
                                        </p>
                                    </Link>

                                </div>

                            </article>
                        </section>
                        <section className="testimonailes">
                            <h3>Testimoniales</h3>
                            <div className="testimonial">

                                <blockquote>
                                    El personal se comporto de una excelente forma, muy buena atencion y la casa que me ofrecieron cumple con todas mis expectativas
                                </blockquote>
                                <p> -Simon Torbett</p>

                            </div>
                        </section>
                    </div>
            </body>
        </>
    )
}