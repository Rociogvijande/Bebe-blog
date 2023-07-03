import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='container'>
    
      
      <footer className='footer'>
        <h3>BebéBlog - &#169; {currentYear} </h3>
      </footer>
    </div>
  );
};

export default Footer;
