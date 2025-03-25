import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="py-3 bg-dark text-white mt-5">
      <div className="container text-center">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">GitHub</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
