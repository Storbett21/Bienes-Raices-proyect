import React, { useState } from 'react';

export const Datos = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/save_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, apellido, telefono }),
      });

      const responseData = await response.json();

      setMessage(responseData.message);
    } catch (error) {
      setMessage('Error al guardar el usuario');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Formulario de Usuario</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <br />
        <label>
          Apellido:
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </label>
        <br />
        <label>
          Teléfono:
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Guardar Usuario</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}