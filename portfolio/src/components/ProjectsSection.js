import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="mb-4">Projects</h2>
        <div className="row">
          {projects.filter(p => p.title.trim() !== '').map((project, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card bg-dark text-white">
                {project.image && (
                  <img src={project.image} className="card-img-top" alt={`Project ${index + 1}`} />
                )}
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
