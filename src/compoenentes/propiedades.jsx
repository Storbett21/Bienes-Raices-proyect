import React from "react";
import Destacada from "../imagenes/img/destacada.jpg";
import wc from "../imagenes/img/icono_wc.svg";
import estacionamiento from "../imagenes/img/icono_estacionamiento.svg";
import cuartos from "../imagenes/img/icono_dormitorio.svg";
import "../estilos/home.css";
import { Header } from "./header";


export const Propiedades = () => {


    return (

        <>
            <div>
                <Header mostrarImagenDeFondo={false} alturaMinima="30rem" />
            </div>

            <main className="contenedor seccion">
                <h1> Casa en Venta frente al Bosque </h1>

                <img src={Destacada} alt="imagen destacada"></img>
                <div className="resumen-propiedad">

                    <p className="precio">90.000.000</p>

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
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum laoreet volutpat. Sed enim sem, ultricies at venenatis eget, convallis a justo. Duis elementum auctor nunc, a feugiat eros cursus a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et erat vitae nibh venenatis rutrum feugiat vel dui. Donec elementum suscipit sapien in consequat. Etiam fermentum massa ut fermentum laoreet. Aliquam condimentum vestibulum nisi ut consequat. Sed sem augue, eleifend quis malesuada vel, euismod id ligula. Nulla pulvinar mi a eleifend egestas. Ut quis efficitur erat. Fusce convallis pretium nibh sed scelerisque. Duis ac maximus lorem. Integer sodales efficitur est, et consequat lorem ultrices a. Integer et luctus magna.

                        Aenean gravida ante nec odio condimentum, a posuere orci viverra. Vivamus purus purus, tincidunt eu velit nec, aliquet auctor elit. Ut ultrices dictum augue vel tincidunt. Curabitur semper, nulla at aliquet maximus, ex elit cursus nulla, ac convallis augue arcu congue arcu. Quisque rutrum neque eu metus consequat, sit amet feugiat augue hendrerit. Pellentesque tincidunt, risus quis venenatis blandit, nunc dui suscipit ipsum, et pulvinar augue quam sit amet orci. Vestibulum lacus magna, efficitur nec finibus at, pulvinar vitae nibh. Vivamus urna est, suscipit vel varius non, pellentesque eu tellus.

                        Donec tempor viverra purus nec volutpat. Integer et blandit diam. Nunc vel tempus augue, in elementum lacus. Pellentesque elementum metus non justo ultrices, nec accumsan eros posuere. Ut tortor tortor, posuere non nulla ac, laoreet vulputate lacus. Quisque pellentesque eros eget ligula pulvinar dictum. Phasellus vel auctor sem. Phasellus lobortis dictum nulla, in iaculis purus ullamcorper nec. Nunc a orci quam.
                    </p>

                </div>




            </main>

        </>
    )



}