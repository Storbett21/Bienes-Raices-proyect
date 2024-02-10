import React from "react";
import destacada from "../imagenes/img/destacada3.jpg"

import "./../estilos/contacto.css";
import { Header } from "../compoenentes/header";
import { Formulario } from "../compoenentes/formulario";
export const Contacto = () => {
    return(
        <> 
        <body>
        <Header mostrarImagenDeFondo={false} alturaMinima="30rem" />
        <div className="contenedor">
          <h1>CONTACTO</h1>

          <picture>
                <img src={destacada} alt="imagen de contaco"></img>
            </picture>

            <h2>llene el formuario de contacto</h2>
           <Formulario/>
        </div>
        </body>
        </>
            )
        }