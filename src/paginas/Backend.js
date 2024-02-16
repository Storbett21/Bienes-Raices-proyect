import React, { useState, useEffect } from 'react';

export const  Back = () => {
  const [status, setStatus] = useState(null); // Variable de estado para almacenar el estado del backend

  useEffect(() => {
    fetch('http://127.0.0.1:5000/status', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        dbname: "BienesRaices",
        user: "postgres",
        password: "postgres",
        host: "127.0.0.1",
        port: "5432"
      })
    })
    .then(response => response.json())
    .then(data => {
      setStatus(data.status); // Asigna el estado del backend a la variable de estado
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, []); // Se ejecuta una vez al cargar el componente

  return (
    <div>
      <h1>Estado del Backend</h1>
      {status === null ? (
        <p>Cargando...</p>
      ) : (
        <p>Estado: {status}</p> // Muestra el estado del backend
      )}
    </div>
  );
}
