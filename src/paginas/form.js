import React, { useState } from 'react';
import "../estilos/contacto.css"

export const Datos = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [opciones, setOpciones] = useState('');
  const [presupuesto, setpresupuesto] = useState('');
  const [imagen, setImagen] = useState(null);

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const formData = new FormData();
          formData.append('nombre', nombre);
          formData.append('email', email);
          formData.append('telefono', telefono);
          formData.append('mensaje', mensaje);
          formData.append('opciones', opciones);
          formData.append('presupuesto', presupuesto);
          formData.append('imagen', imagen); // Agrega la imagen al FormData

          const response = await fetch('http://127.0.0.1:5000/save_user_with_image', {
              method: 'POST',
              body: formData
          });

          const responseData = await response.json();
          console.log(responseData); // Puedes hacer algo con la respuesta del servidor, como mostrar un mensaje de confirmación
      } catch (error) {
          console.error('Error:', error);
      }
  };

  const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImagen(file);
  };

  return (
      <form className="formulario" onSubmit={handleSubmit}>
          <fieldset>
              <legend>Información Personal</legend>
              <label htmlFor="nombre">Nombre</label>
              <input type="text" placeholder="Tu Nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />

              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Tu Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

              <label htmlFor="telefono">Teléfono</label>
              <input type="tel" placeholder="Tu Teléfono" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />

              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
          </fieldset>
          <fieldset>
              <legend>Información Sobre la Propiedad</legend>
              <label htmlFor="opciones">Vende o Compra</label>
              <select id="opciones" value={opciones} onChange={(e) => setOpciones(e.target.value)}>
                  <option value="" disabled>-- Seleccione --</option>
                  <option value="Compra">Compra</option>
                  <option value="Vende">Vende</option>
              </select>

              <label htmlFor="presupuesto">Presupuesto</label>
              <input type="number" placeholder="Tu Presupuesto" id="presupuesto" value={presupuesto} onChange={(e) => setpresupuesto(e.target.value)} />
              
              <label htmlFor="imagen">Imagen</label>
              <input type="file" id="imagen" onChange={handleImageChange} />
          </fieldset>
          
          <input type="submit" value="Enviar" className="boton-verde" />
      </form>
  );
};
