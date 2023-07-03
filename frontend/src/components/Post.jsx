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
  handleReadMore,
}) {
  const imagePath = imgSrc.replace(/\\/g, "/");

  return (
    <div className="card mb-4" style={{ width: "80%" }}>
      <NavLink to={`/posts/${id}`}></NavLink>
      <img className="card-img-top" src={imagePath} alt="Card image cap" />
      <div className="card-body">
        <h2 className="card-title">
          <NavLink to={`/posts/${id}`}>{title}</NavLink>
        </h2>
        <p className="card-text">
          {text}{" "}
          <NavLink
            to={`/posts/${id}`}
            className="card-link"
            onClick={handleReadMore}
          >
            Leer más
          </NavLink>
        </p>
        <div className="card-buttons">
          <button className="btn btn-primary" onClick={handleEdit}>
            <PencilSquare />
          </button>
          <button className="btn btn-secondary" onClick={handleDelete}>
            <Trash />
          </button>
        </div>
      </div>
    </div>
  );
}

function Post() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const handleReadMore = (postId) => {
    console.log(`Leer más sobre la entrada con ID ${postId}`);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts");
        const data = await response.json();

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
                handleEdit={() => handleEdit(post.id)}
                handleDelete={() => handleDelete(post.id)}
                handleReadMore={handleReadMore}
              />

              {(index + 1) % 3 === 0 && <div className="w-100"></div>}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Post;
