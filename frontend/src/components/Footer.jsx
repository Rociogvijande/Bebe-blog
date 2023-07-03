import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer'>
      <h3>BebéBlog - &#169; {currentYear} </h3>
    </footer>
  );
};

export default Footer;
