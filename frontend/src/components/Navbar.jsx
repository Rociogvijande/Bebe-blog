import React, { useState } from 'react';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const NavbarComponent = () => {
  
  
  const navigate = useNavigate();
  const navbarStyle = {
    backgroundColor: '#e3f2fd',
    display: 'flex',
    justifyContent: 'center', // Alinear elementos al centro horizontalmente
    // Hacer que la Navbar esté fija
    width: '100%', // Ancho completo
  };

  const navLinkStyle = {
    textAlign: 'center' // Alinear el texto al centro
  };

  const handleClick = () => {
    navigate('/nuevopost'); // Navegar a la ruta especificada
  };


  return (
    <Navbar style={navbarStyle} expand="lg" collapseOnSelect>
      <Nav className="ms-auto">
        <Nav.Item style={navLinkStyle}>
          {/* <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={newEntry.title}
              placeholder="Título"
              onChange={handleInputChange}
            />
            <textarea
              name="content"
              value={newEntry.content}
              placeholder="Contenido"
              onChange={handleInputChange}
            />
          </form> */}
          <button onClick={handleClick} type="submit">Añadir entrada</button>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
