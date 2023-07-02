import React, { useState } from 'react';

const Nuevopost = () => {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [imagen, setImagen] = useState(null);

  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  const handleContenidoChange = (event) => {
    setContenido(event.target.value);
  };

  const handleImagenChange = (event) => {
    const selectedFile = event.target.files[0];
    setImagen(selectedFile);
  };

  const handleCancelarImagen = () => {
    setImagen(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('contenido', contenido);
    formData.append('imagen', imagen);

    try {
      const response = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Nuevo post creado:', data);
        // Restablecer los valores del formulario
        setTitulo('');
        setContenido('');
        setImagen(null);
      } else {
        console.error('Error al crear el post:', response.status);
        // Manejar el error en caso de que ocurra
      }
    } catch (error) {
      console.error('Error al crear el post:', error);
      // Manejar el error en caso de que ocurra
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="titulo"
              placeholder="Escribe el título"
              value={titulo}
              onChange={handleTituloChange}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="contenido"
              placeholder="Escribe el contenido de la entrada"
              value={contenido}
              onChange={handleContenidoChange}
              maxLength={500}
            />
          </div>
          <div className="form-group">
            <label>
              <strong>Imagen</strong>
            </label>
            <input
              type="file"
              className="form-control-file"
              onChange={handleImagenChange}
            />
          </div>
          {imagen && (
            <div className="form-group">
              <img
                src={URL.createObjectURL(imagen)}
                alt="Imagen seleccionada"
                className="img-thumbnail"
                style={{ maxWidth: '200px' }}
              />
              <div className="d-flex justify-content-end mt-2">
                <button type="button" className="btn btn-danger" onClick={handleCancelarImagen}>
                  Cancelar imagen
                </button>
              </div>
            </div>
          )}
          <div className="d-flex justify-content-end mt-3">
            <button type="submit" className="btn btn-primary mr-2">
              Enviar
            </button>
            <button type="reset" className="btn btn-secondary">
              Resetear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Nuevopost;
