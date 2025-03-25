// ProjectCard.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectCard = ({ title, description, image, github }) => (
  <div className="card bg-dark text-white">
    {image && <img src={image} className="card-img-top" alt={title} />}
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          View on GitHub
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
