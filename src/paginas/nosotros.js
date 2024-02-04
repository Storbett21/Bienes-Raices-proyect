import React from "react";

import "./../estilos/nosotros.css";

import nosotros from "../imagenes/img/nosotros.jpg";
import icono1 from "../imagenes/img/icono1.svg";
import icono2 from "../imagenes/img/icono2.svg";
import icono3 from "../imagenes/img/icono3.svg";
import { Header } from "../compoenentes/header";

export const Nosotros = () => {
    return(
        <> 
        <body>
        <Header mostrarImagenDeFondo={false} alturaMinima="30rem" />
        <div className="contenedor-seccion">
            <h1>Conoce sobre Nosotros</h1>
            <div className="contenido-nosotros">

                <picture>
                    <img src={nosotros} alt="Sobre Nosotros" className="img"></img>
                </picture>
                <div className="texto-nosotros">
                <blockquote>
                    25 Años de Experiencia
                </blockquote>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum laoreet volutpat. Sed enim sem, ultricies at venenatis eget, convallis a justo. Duis elementum auctor nunc, a feugiat eros cursus a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et erat vitae nibh venenatis rutrum feugiat vel dui. Donec elementum suscipit sapien in consequat. Etiam fermentum massa ut fermentum laoreet. Aliquam condimentum vestibulum nisi ut consequat. Sed sem augue, eleifend quis malesuada vel, euismod id ligula. Nulla pulvinar mi a eleifend egestas. Ut quis efficitur erat. Fusce convallis pretium nibh sed scelerisque. Duis ac maximus lorem. Integer sodales efficitur est, et consequat lorem ultrices a. Integer et luctus magna.

Aenean gravida ante nec odio condimentum, a posuere orci viverra. Vivamus purus purus, tincidunt eu velit nec, aliquet auctor elit. Ut ultrices dictum augue vel tincidunt. Curabitur semper, nulla at aliquet maximus, ex elit cursus nulla, ac convallis augue arcu congue arcu. Quisque rutrum neque eu metus consequat, sit amet feugiat augue hendrerit. Pellentesque tincidunt, risus quis venenatis blandit, nunc dui suscipit ipsum, et pulvinar augue quam sit amet orci. Vestibulum lacus magna, efficitur nec finibus at, pulvinar vitae nibh. Vivamus urna est, suscipit vel varius non, pellentesque eu tellus.

Donec tempor viverra purus nec volutpat. Integer et blandit diam. Nunc vel tempus augue, in elementum lacus. Pellentesque elementum metus non justo ultrices, nec accumsan eros posuere. Ut tortor tortor, posuere non nulla ac, laoreet vulputate lacus. Quisque pellentesque eros eget ligula pulvinar dictum. Phasellus vel auctor sem. Phasellus lobortis dictum nulla, in iaculis purus ullamcorper nec. Nunc a orci quam.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar pretium est, non cursus felis facilisis at. Integer leo erat, sagittis ut purus a, hendrerit convallis mauris. Nulla nec justo mattis eros aliquam sodales. Nulla laoreet est dolor, ac gravida augue eleifend sollicitudin. Ut tincidunt feugiat arcu, at bibendum enim.
                </p>
            </div>

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
        </div>
        </body>
        </>
            )
        }