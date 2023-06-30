import React, { useEffect, useState } from 'react';
import { PencilSquare, Trash } from 'react-bootstrap-icons';

function Card({ imgSrc, title, text, handleEdit, handleDelete, handleReadMore }) {
  const imagePath = `/posts/${imgSrc}`;

  return (
    <div className="card mb-4" style={{ width: '100%' }} >
      <img className="card-img-top" src={imagePath} alt="Card image cap" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{text} <a href="#" className="card-link" onClick={handleReadMore}>
          Leer más
        </a></p>
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

  const handleReadMore = (event, postId) => {
    event.preventDefault();
    console.log(`Leer más sobre la entrada con ID ${postId}`);
  };
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3000/posts');
        const data = await response.json();

       const updatedPosts = data.map((post) => {
        return {
          ...post,
          image: `post_${post.id}.jpg`, // Nombre de archivo según el ID del post
        };
      });

      setPosts(updatedPosts);
    } catch (error) {
      console.error('Error al obtener los posts:', error);
    }
  };

    fetchPosts();
  }, []);

  const chunkSize = 2;

  const groupedPosts = [];
  for (let i = 0; i < posts.length; i += chunkSize) {
    groupedPosts.push(posts.slice(i, i + chunkSize));
  }

  const handleEdit = (postId) => {
    console.log(`Editar post con ID ${postId}`);
  };

  const handleDelete = (postId) => {
    console.log(`Eliminar post con ID ${postId}`);
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + '...';
  };

  return (
    <main>
      <div className="container">
      <div className="row justify-content-center mt-4">
          {groupedPosts.map((group, index) => (
              <div key={index} className="row">
                {group.map((post, postIndex) => (
                  <div className="col-6 mb-4" key={postIndex}>
                    <Card
                      imgSrc={post.image}
                      title={post.title}
                      text={truncateText(post.content, 50)}
                      handleEdit={() => handleEdit(post.id)}
                      handleDelete={() => handleDelete(post.id)}
                      handleReadMore={() => handleReadMore(post.id)}
                    />
                  </div>
                ))}
              </div>
            ))}
         
      </div>
      </div>
    </main>
  );
}

export default Post;