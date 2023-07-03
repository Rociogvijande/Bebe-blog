import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PostIndividual = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.error("Error al obtener el detalle del post:", error);
      });
  }, [id]);

  if (!post) {
    return <div>Cargando...</div>;
  }

  const handleEditClick = () => {
    navigate(`/post/editar/${id}`);
  };

  const handleDeletePost = async () => {
    try {
      const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        navigate("/"); // Redirige a la página principal después de eliminar el post
      } else {
        throw new Error("Error al eliminar el post");
      }
    } catch (error) {
      console.error("Error al eliminar el post:", error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="d-flex justify-content-center">
            <img
              src={`http://localhost:3000/${post.image}`}
              className="img-fluid rounded mb-4"
              alt="Imagen del post"
            />
          </div>
          <div
            className="post-content"
            style={{ background: "#f7f7f7", padding: "20px" }}
          >
            <h1 className="text-center">{post.title}</h1>
            <p className="text-center">
              Fecha de publicación: {formatDate(post.date)}
            </p>
            <textarea
              className="form-control"
              rows="15"
              style={{ wordWrap: "break-word" }}
              value={post.content}
              readOnly
            ></textarea>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <button className="btn btn-primary me-2" onClick={handleEditClick}>
              Editar
            </button>
            <button className="btn btn-danger" onClick={handleDeletePost}>
              Borrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostIndividual
