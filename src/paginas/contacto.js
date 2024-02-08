import React from "react";
import destacada from "../imagenes/img/destacada3.jpg"
import "./../estilos/home.css"

import "./../estilos/contacto.css";
import { Header } from "../compoenentes/header";

export const Contacto = () => {
    return(
        <> 
        <body>
        <Header mostrarImagenDeFondo={false} alturaMinima="30rem" />
        <div className="contenedor-seccion">
          <h1>CONTACTO</h1>

          <picture>
                <img src={destacada} alt="imagen de contaco"></img>
            </picture>

            <h2>llene el formuario de contacto</h2>
            <form className="formulario">
                <fieldset>
                    <legend> Informacion Personal</legend>
                    <label form="nombre">Nombre</label>
                    <input type="text" placeholder="Tu Nombre" id="nombre"></input>

                    <label form="email">Email</label>
                    <input type="email" placeholder="Tu Email" id="email"></input>

                    <label form="telefono">Telefono</label>
                    <input type="tel" placeholder="Tu telefono" id="telefono"></input>

                    <label form="nombre">Menssaje</label>
                    <textarea id="mensaje"></textarea>
                </fieldset>
                <fieldset>
                    <legend>Informacion Sobre la Propiedad</legend>

                    <label form="opciones">Vende o Compra</label>
                    <select id="opciones">
                        <option value="" disabled selected>--Selecione--</option>
                        <option value="Compra">Compra</option>
                        <option value="Vende">Vende</option>


                    </select>

                    <label form="presupuesto">Presupuesto</label>
                    <input type="number" placeholder="Tu telefono" id="telefono"></input>
                </fieldset>

                <fieldset>

                    <legend>Contacto</legend>
                    <p>Como Desearia ser Contactado</p>

                    <div className="forma-contacto">
                        <label form="contactar-telefono">Telefono</label>
                        <input name="contacto"  type="radio" value="telefono" id="contactar-telefono"></input>

                        <label form="contactar-email">Email</label>
                        <input name="contacto" type="radio" value="email" id="contactar-email"></input>
                    </div>


                </fieldset>
                <input type="submit" value="Enviar" className="boton-verde"></input>
            </form>
        </div>
        </body>
        </>
            )
        }