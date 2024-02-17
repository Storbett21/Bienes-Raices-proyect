import React from "react";
import "./../estilos/anuncios.css";
import imagen4 from "../imagenes/img/anuncio4.jpg";
import imagen5 from "../imagenes/img/anuncio5.jpg";
import imagen6 from "../imagenes/img/anuncio6.jpg";
import { Cards } from "../compoenentes/cards";
import { Header } from "../compoenentes/header";

export const Anuncios = () => {
    return (
        <div>
            <Header mostrarImagenDeFondo={false} alturaMinima="30rem" />
            <div>
                <Cards
                    anuncio1={imagen4}
                    anuncio2={imagen5}
                    anuncio3={imagen6}
                />
            </div>
        </div>
    );
};
