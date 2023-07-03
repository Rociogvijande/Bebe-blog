import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PostEditado = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editedPost, setEditedPost] = useState({
    title: "",
    content: "",
    image: null,
  });

  useEffect(() => {
    // Obtener los detalles del post al cargar el componente
    fetch(`http://localhost:3000/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setEditedPost(data);
      })
      .catch((error) => {
        console.error("Error al obtener el detalle del post:", error);
      });
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setEditedPost((prevState) => ({
      ...prevState,
      image: file,
    }));
  };

  const handleSaveClick = async () => {
    try {
      const requestData = {
        title: editedPost.title,
        content: editedPost.content,
      };
  
      if (editedPost.image) {
        requestData.image = editedPost.image;
      }
  
      const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("Post editado:", data);
        navigate(`/posts/${id}`);
      } else {
        throw new Error("Error al editar el post");
      }
    } catch (error) {
      console.error("Error al editar el post:", error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center">Editar Post</h1>
          <form>
            <div className="form-group">
              <label>Título:</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={editedPost.title || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Contenido:</label>
              <textarea
                className="form-control"
                rows="15"
                name="content"
                value={editedPost.content || ""}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Imagen:</label>
              <input
                type="file"
                name="image"
                className="form-control"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <div>
              <button className="btn btn-primary mt-2" type="button" onClick={handleSaveClick}>
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostEditado;
