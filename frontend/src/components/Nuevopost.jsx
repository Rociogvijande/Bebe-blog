import React, { useState } from 'react';

const Nuevopost = () => {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [imagen, setImagen] = useState(null);

  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  const handleContenidoChange = (event) => {
    setContenido(event.target.value);
  };

  const handleImagenChange = (event) => {
    const selectedFile = event.target.files[0];
    setImagen(URL.createObjectURL(selectedFile));
  };

  const handleCancelarImagen = () => {
    setImagen(null);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

   
    // Restablecer los valores del formulario
    setTitulo('');
    setContenido('');
    setFecha(new Date());
    setImagen(null);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-6">
      <div>
                  <button type="submit" className="btn btn-primary">
                    Enviar
                  </button>
                  <button type="button" className="btn btn-secondary ml-2" onClick={handleSubmit}>
                    Cancelar
                  </button>
                </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="titulo">
              <strong>Título</strong>
            </label>
            <input
              type="text"
              className="form-control"
              id="titulo"
              value={titulo}
              onChange={handleTituloChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contenido">
              <strong>Contenido</strong>
            </label>
            <textarea
              className="form-control"
              id="contenido"
              value={contenido}
              onChange={handleContenidoChange}
              maxLength={50}
            />
          </div>
          <div className="form-group">
            <label>
              <strong>Fecha</strong>
            </label>
            <input
              type="text"
              className="form-control"
              value={fecha.toString()} // Esto mostrará la fecha actual, pero podrías formatearla según tus necesidades
              disabled
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
              <img src={imagen} alt="Imagen seleccionada" className="img-thumbnail" style={{ maxWidth: '200px' }} />
              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-sm btn-danger mt-2" onClick={handleCancelarImagen}>
                  Cancelar imagen
                </button>
                
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
export default Nuevopost;
