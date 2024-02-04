import React from "react";

import "./../estilos/contacto.css";
import { Header } from "../compoenentes/header";

export const Contacto = () => {
    return(
        <> 
        <body>
        <Header mostrarImagenDeFondo={false} alturaMinima="30rem" />
        <div className="contenedor-seccion">
            <h1>Contacto</h1>
        </div>
        </body>
        </>
            )
        }