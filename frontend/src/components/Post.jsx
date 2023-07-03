import React, { useEffect, useState } from "react";
import { PencilSquare, Trash } from "react-bootstrap-icons";
import { NavLink, useNavigate } from "react-router-dom";

function Card({
  id,
  imgSrc,
  title,
  text,
  handleEdit,
  handleDelete,
}) {
  const imagePath = imgSrc.replace(/\\/g, "/");

  return (
    <div className="card mb-4" style={{ width: "100%" }}>
      <NavLink to={`/posts/${id}`}>
        <img className="card-img-top" src={imagePath} alt="Card image cap" />
      </NavLink>
      <div className="card-body text-center">
        <h2 className="card-title">
          <NavLink to={`/posts/${id}`} className="card-link text-decoration-none text-dark">
            {title}
          </NavLink>
        </h2>
        <p className="card-text">{text}</p>
        <div className="card-buttons">
          <button className="btn btn-primary" onClick={() => handleEdit(id)}>
            <PencilSquare /> Editar
          </button>
          <button className="btn btn-danger" onClick={() => handleDelete(id)}>
            <Trash /> Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

function Post() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Data received:', data); // Add this line to inspect your data.
        setPosts(data);
      } catch (error) {
        console.error("Error al obtener los posts:", error);
      }
    };
  
    fetchPosts();
  }, []);
  

  const handleEdit = (postId) => {
    navigate(`/posts/editar/${postId}`);
  };

  const handleDelete = async (postId) => {
    try {
      const response = await fetch(`http://localhost:3000/posts/${postId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log(`Post eliminado con ID ${postId}`);

        // Actualizar la lista de posts después de eliminar
        const updatedPosts = posts.filter((post) => post.id !== postId);
        setPosts(updatedPosts);
      } else {
        console.error(`Error al eliminar el post con ID ${postId}`);
      }
    } catch (error) {
      console.error(`Error al eliminar el post con ID ${postId}:`, error);
    }
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + "...";
  };

  return (
    <main>
      <div className="container">
        <div className="row justify-content-center mt-4">
          {posts.map((post, index) => (
            <div className="col-lg-4 mb-4" key={post.id}>
              <Card
                id={post.id}
                imgSrc={`http://localhost:3000/${post.image}`}
                title={post.title}
                text={truncateText(post.content, 50)}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Post;
