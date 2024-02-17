import React, { useState } from 'react';

export const Propiedades = () => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [banos, setBanos] = useState('');
  const [estacionamiento, setEstacionamiento] = useState('');
  const [habitaciones, setHabitaciones] = useState('');
  const [imagen, setImagen] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('descripcion', descripcion);
    formData.append('precio', precio);
    formData.append('banos', banos);
    formData.append('estacionamientos', estacionamiento);
    formData.append('habitaciones', habitaciones);
    formData.append('imagen', imagen);

    try {
      const response = await fetch('http://127.0.0.1:5000/agregar_propiedad', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.error || 'Error al enviar los datos');
      }

      const data = await response.json();
      console.log(data);

      setTitulo('');
      setDescripcion('');
      setPrecio('');
      setBanos('');
      setEstacionamiento('');
      setHabitaciones('');
      setImagen(null);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Información de la Propiedad</legend>
        <label htmlFor="titulo">Título</label>
        <input type="text" placeholder="Título de la propiedad" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />

        <label htmlFor="descripcion">Descripción</label>
        <textarea id="descripcion" placeholder="Descripción de la propiedad" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>

        <label htmlFor="precio">Precio</label>
        <input type="number" placeholder="Precio de la propiedad" id="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />

        <label htmlFor="banos">Número de Baños</label>
        <input type="number" placeholder="Número de baños" id="banos" value={banos} onChange={(e) => setBanos(e.target.value)} />

        <label htmlFor="estacionamiento">Número de estacionamiento</label>
        <input type="number" placeholder="Número de estacionamiento" id="estacionamiento" value={estacionamiento} onChange={(e) => setEstacionamiento(e.target.value)} />

        <label htmlFor="habitaciones">Número de habitaciones</label>
        <input type="number" placeholder="Número de habitaciones" id="habitaciones" value={habitaciones} onChange={(e) => setHabitaciones(e.target.value)} />

        <label htmlFor="imagen">Imagen</label>
        <input type="file" id="imagen" name='imagen' onChange={(e) => setImagen(e.target.files[0])} accept=".png, .jpg, .jpeg, .gif" />
      </fieldset>

      {error && <p>{error}</p>}

      <input type="submit" value="Agregar Propiedad" className="boton-verde" />
    </form>
  );
};
