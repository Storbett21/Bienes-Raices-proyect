import React, { useState } from 'react';






export const Datos = () => {
  // Estado para almacenar los valores del formulario
  const [values, setValues] = useState({
    idVendedores: '',
    nombre: '',
    apellido: '',
    telefono: ''
  });

  // Función para manejar cambios en los valores del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  // Función para enviar los datos del formulario al backend
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos al backend utilizando fetch o axios
    fetch('http://127.0.0.1:5000/insertar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(response => response.json())
    .then(data => {
      // Manejar la respuesta del backend según sea necesario
      console.log('Respuesta del backend:', data);
    })
    .catch(error => {
      console.error('Error al enviar los datos:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" name="nombre" value={values.nombre} onChange={handleChange} />
      </label>
      <label>
        Apellido:
        <input type="text" name="apellido" value={values.apellido} onChange={handleChange} />
      </label>
      <label>
        Teléfono:
        <input type="text" name="telefono" value={values.telefono} onChange={handleChange} />
      </label>
      <button type="submit">Guardar</button>
    </form>
  );
}


