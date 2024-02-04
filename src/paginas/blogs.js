import React from "react";
import "./../estilos/blogs.css";
import { Link } from "react-router-dom";
import { Header } from "../compoenentes/header";
import Blog1 from "../imagenes/img/blog1.jpg";
import Blog2 from "../imagenes/img/blog2.jpg";

export const Blogs = () => {


    return (
        <>
            <body>
                <Header mostrarImagenDeFondo={false} alturaMinima="30rem" />
                <div className="contenedor-seccion">
                    <h1>Blogs</h1>
                </div>
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
            </body>
        </>
    )
}