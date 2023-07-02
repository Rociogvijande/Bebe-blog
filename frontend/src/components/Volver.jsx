import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); // Navegar a la ruta especificada
  };

  return (
    <Navbar expand="lg" collapseOnSelect>
      <Nav className="ms-auto">
        <Nav.Item>
          <button className='btn btn-secondary' onClick={handleClick} type="submit">Volver</button>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
