import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutMeSection = ({ profilePicture, skills, bio }) => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {profilePicture && (
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img src={profilePicture} alt="Profile" className="img-fluid rounded-circle" />
            </div>
          )}
          <div className="col-md-8">
            <h2>About Me</h2>
            <p>{bio}</p>
            {skills && skills.length > 0 && (
              <div>
                <h4>Skills</h4>
                <ul className="list-unstyled">
                  {skills.map((skill, index) => (
                    <li key={index} className="mb-1">
                      <span className="badge bg-primary">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
