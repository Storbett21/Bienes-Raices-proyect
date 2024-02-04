import React from "react";
import "./../estilos/blogs.css";
import { Header } from "../compoenentes/header";

export const Blogs = () => {


    return(
<> 
<body>
<Header mostrarImagenDeFondo={false} alturaMinima="30rem" />
<div className="contenedor-seccion">
    <h1>Blogs</h1>
</div>
</body>
</>
    )
}