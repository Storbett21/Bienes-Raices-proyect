import React from "react";
import { Link } from "react-router-dom";
import "./../estilos/home.css";
import "./../estilos/footer.css";



const Footer =() =>{


    return (

        <div className="footer contenedor-footer">
          

            <nav className="navegacion1">
        <Link to="/Nosotros" className="enlace">Nosotros</Link>
        <Link to="/Anuncios" className="enlace">Anuncios</Link>
        <Link to="/Blogs" className="enlace">Blogs</Link>
        <Link to="/Contacto" className="enlace">Contacto</Link>
     </nav>

     <p className="copyright">Simon Torbett Todos Los Derechos Reservados 2024 © </p>



</div>
    


    )
}

export default Footer;