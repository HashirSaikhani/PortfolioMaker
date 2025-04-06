import React, { useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import 'bootstrap/dist/css/bootstrap.min.css';


const ProjectsSection = ({ projects, setProjects }) => {
  useEffect(() => {
   
    if (projects.length === 0 || projects.every(p => p.title.trim() === '')) {
      fetch('https://raw.githubusercontent.com/HashirSaikhani/PortfolioMaker/main/projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
        .catch(err => console.error('Failed to fetch project data:', err));
    }
  }, [projects, setProjects]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const reordered = Array.from(projects);
    const [movedItem] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, movedItem);

    setProjects(reordered);
  };

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="mb-4">Projects</h2>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="projects-list" direction="horizontal">
            {(provided) => (
              <div
                className="row flex-nowrap overflow-auto"
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{ gap: '16px', paddingBottom: '10px' }}
              >
                {projects.map((project, index) => (
                  <Draggable key={index} draggableId={`project-${index}`} index={index}>
                    {(provided) => (
                      <div
                        className="col-md-4"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          ...provided.draggableProps.style,
                          minWidth: '300px',
                          maxWidth: '300px',
                        }}
                      >
                        <div className="card bg-dark text-white h-100">
                          {project.image && (
                            <img
                              src={project.image}
                              className="card-img-top"
                              alt={`Project ${index + 1}`}
                              style={{ height: '200px', objectFit: 'cover' }}
                            />
                          )}
                          <div className="card-body">
                            <h5 className="card-title">{project.title}</h5>
                            <p className="card-text">{project.description}</p>
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                              >
                                View on GitHub
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </section>
  );
};

export default ProjectsSection;
