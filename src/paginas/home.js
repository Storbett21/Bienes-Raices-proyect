import React from "react";
import { Link } from "react-router-dom";
import "./../estilos/home.css";
import icono1 from "../imagenes/img/icono1.svg";
import icono2 from "../imagenes/img/icono2.svg";
import icono3 from "../imagenes/img/icono3.svg";
import imagen1 from "../imagenes/img/anuncio1.jpg";
import imagen2 from "../imagenes/img/anuncio2.jpg";
import imagen3 from "../imagenes/img/anuncio3.jpg";
import Blog1 from "../imagenes/img/blog1.jpg";
import Blog2 from "../imagenes/img/blog2.jpg";
import { Cards } from "../compoenentes/cards";
import { Header } from "../compoenentes/header";


export const Home = () => {


    return (
        <>
            <body>
                <div>
                    <Header titulo="Venta de Casas y Departamentos Exclusivos de Lujo" mostrarImagenDeFondo={true} />
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

                    <div>
                        <Cards
                            anuncio1={imagen1}
                            anuncio2={imagen2}
                            anuncio3={imagen3}

                        />
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
                                <Link to="/blogs" className="a">
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