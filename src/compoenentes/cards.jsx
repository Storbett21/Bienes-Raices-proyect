import React from "react";
import { Link } from "react-router-dom";
import "./../estilos/home.css";
// import imagen1 from "../imagenes/img/anuncio1.jpg";
// import imagen2 from "../imagenes/img/anuncio2.jpg";
// import imagen3 from "../imagenes/img/anuncio3.jpg";
import wc from "../imagenes/img/icono_wc.svg";
import estacionamiento from "../imagenes/img/icono_estacionamiento.svg";
import cuartos from "../imagenes/img/icono_dormitorio.svg";

export const Cards = ({ anuncio1, anuncio2, anuncio3 }) => {
  return (



    <div className="seccion contenedor">
      <h2> Casas Y Departamentos en Venta</h2>

      <div className="contenedor-anuncios">
        <div className="anuncio">
          <picture>
            <img src={anuncio1} alt="anuncio"></img>
          </picture>
          <div className="contenido-anuncio">
            <h3> Casa de Lujo en el Lago</h3>
            <p>Casa en el Lago con excelente vista, acabados de lujo a un excelente precio</p>
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
            <Link to="/propiedades" className="boton">
              Ver Propiedades
            </Link>
          </div>
        </div>
        <div className="anuncio">
          <picture>
            <img src={anuncio2} alt="anuncio"></img>
          </picture>
          <div className="contenido-anuncio">
            <h3> Casa de Lujo</h3>
            <p>Casa en el Lago con excelente vista, acabados de lujo a un excelente precio</p>
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
            <Link to="/propiedades" className="boton">
              Ver Propiedades
            </Link>
          </div>
        </div>
        <div className="anuncio">
          <picture>
            <img src={anuncio3} alt="anuncio"></img>
          </picture>
          <div className="contenido-anuncio">
            <h3> Casa con piscina</h3>
            <p>Casa en el Lago con excelente vista, acabados de lujo a un excelente precio</p>
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
            <Link to="/propiedades" className="boton">
              Ver Propiedades
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

