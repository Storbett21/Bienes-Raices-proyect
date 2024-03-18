import React from "react";
import "./../estilos/home.css";
import wc from "../imagenes/img/icono_wc.svg";
import parking from "../imagenes/img/icono_estacionamiento.svg";
import cuartos from "../imagenes/img/icono_dormitorio.svg";

export const Cards = ({ propiedad }) => {
  // Asegurarse de que la propiedad esté definida antes de acceder a sus campos
  if (!propiedad) {
    return null; // Si no hay propiedad, no renderizar nada
  }

  // Desestructurar la propiedad para acceder fácilmente a sus campos
  const { titulo, descripcion, precio, banos, estacionamientos, habitaciones, imagen } = propiedad;

  return (
    <div className="seccion contenedor">
      <h2> Casas Y Departamentos en Venta</h2>
      <div className="contenedor-anuncios">
        <div className="anuncio">
          <picture>
            {imagen && <img src={imagen} alt="anuncio"></img>}
          </picture>
          <div className="contenido-anuncio">
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <p className="precio">{precio}</p>
            <ul className="iconos-caracteristicas">
              <li>
                <img src={wc} alt="poceta"></img>
                <p>{banos}</p>
              </li>
              <li>
                <img src={parking} alt="estacionamiento"></img>
                <p>{estacionamientos}</p>
              </li>
              <li>
                <img src={cuartos} alt="cuartos"></img>
                <p>{habitaciones}</p>
              </li>
            </ul>
            <button className="boton">
              Ver Propiedades
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
