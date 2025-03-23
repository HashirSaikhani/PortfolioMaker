import React, { useState } from 'react';

const DataEntryPage = () => {
  // Introductory details state
  const [studentName, setStudentName] = useState('');
  const [bio, setBio] = useState('');
  const [introDetails, setIntroDetails] = useState('');

  // About Me state
  const [profilePicture, setProfilePicture] = useState('');
  const [skills, setSkills] = useState('');
  const [interests, setInterests] = useState('');
  const [aboutDescription, setAboutDescription] = useState('');

  // Projects state (allows multiple projects)
  const [projects, setProjects] = useState([
    { title: '', description: '', image: '', github: '' }
  ]);

  // Social Media Links state (dynamic addition)
  const [socialLinks, setSocialLinks] = useState([
    { name: '', url: '' }
  ]);

  // Handlers for updating project fields
  const handleProjectChange = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  // Add a new empty project entry
  const handleAddProject = () => {
    setProjects([...projects, { title: '', description: '', image: '', github: '' }]);
  };

  // Handlers for updating social media links
  const handleSocialLinkChange = (index, field, value) => {
    const newSocialLinks = [...socialLinks];
    newSocialLinks[index][field] = value;
    setSocialLinks(newSocialLinks);
  };

  // Add a new empty social media link entry
  const handleAddSocialLink = () => {
    setSocialLinks([...socialLinks, { name: '', url: '' }]);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      studentName,
      bio,
      introDetails,
      aboutMe: {
        profilePicture,
        skills,
        interests,
        aboutDescription,
      },
      projects,
      socialLinks,
    };

    // For demonstration, we'll log the data.
    // In your app, you can redirect or pass this data to generate your portfolio.
    console.log('Submitted Data:', formData);
  };

  return (
    <div className="container py-4" style={{ backgroundColor: '#343a40', color: 'white' }}>
      <h1 className="mb-4">Portfolio Data Entry</h1>
      <form onSubmit={handleSubmit}>
        {/* Introductory Details */}
        <fieldset className="border p-3 mb-4" style={{ borderColor: 'white' }}>
          <legend className="w-auto px-2">Introductory Details</legend>
          <div className="form-group mb-3">
            <label>Student's Name:</label>
            <input
              type="text"
              className="form-control"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group mb-3">
            <label>Bio:</label>
            <textarea
              className="form-control"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Enter a short bio"
            />
          </div>
          <div className="form-group mb-3">
            <label>Additional Details:</label>
            <textarea
              className="form-control"
              value={introDetails}
              onChange={(e) => setIntroDetails(e.target.value)}
              placeholder="Enter additional details"
            />
          </div>
        </fieldset>

        {/* About Me Section */}
        <fieldset className="border p-3 mb-4" style={{ borderColor: 'white' }}>
          <legend className="w-auto px-2">About Me</legend>
          <div className="form-group mb-3">
            <label>Profile Picture URL:</label>
            <input
              type="text"
              className="form-control"
              value={profilePicture}
              onChange={(e) => setProfilePicture(e.target.value)}
              placeholder="Enter URL for profile picture"
            />
          </div>
          <div className="form-group mb-3">
            <label>Skills (comma separated):</label>
            <input
              type="text"
              className="form-control"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="e.g. JavaScript, React, CSS"
            />
          </div>
          <div className="form-group mb-3">
            <label>Interests:</label>
            <input
              type="text"
              className="form-control"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              placeholder="Enter your interests"
            />
          </div>
          <div className="form-group mb-3">
            <label>Detailed Description:</label>
            <textarea
              className="form-control"
              value={aboutDescription}
              onChange={(e) => setAboutDescription(e.target.value)}
              placeholder="Enter a detailed description about yourself"
            />
          </div>
        </fieldset>

        {/* Projects Section */}
        <fieldset className="border p-3 mb-4" style={{ borderColor: 'white' }}>
          <legend className="w-auto px-2">Projects</legend>
          {projects.map((project, index) => (
            <div key={index} className="card bg-dark mb-3">
              <div className="card-body">
                <h5 className="card-title">Project {index + 1}</h5>
                <div className="form-group mb-2">
                  <label>Title:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={project.title}
                    onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                    placeholder="Project title"
                  />
                </div>
                <div className="form-group mb-2">
                  <label>Description:</label>
                  <textarea
                    className="form-control"
                    value={project.description}
                    onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                    placeholder="Project description"
                  />
                </div>
                <div className="form-group mb-2">
                  <label>Image URL:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={project.image}
                    onChange={(e) => handleProjectChange(index, 'image', e.target.value)}
                    placeholder="Project image URL"
                  />
                </div>
                <div className="form-group mb-2">
                  <label>GitHub Link:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={project.github}
                    onChange={(e) => handleProjectChange(index, 'github', e.target.value)}
                    placeholder="Project GitHub URL"
                  />
                </div>
              </div>
            </div>
          ))}
          <button type="button" className="btn btn-secondary mb-3" onClick={handleAddProject}>
            Add Project
          </button>
        </fieldset>

        {/* Social Media Links Section */}
        <fieldset className="border p-3 mb-4" style={{ borderColor: 'white' }}>
          <legend className="w-auto px-2">Social Media Links</legend>
          {socialLinks.map((link, index) => (
            <div key={index} className="mb-3">
              <div className="form-group mb-2">
                <label>Name:</label>
                <input
                  type="text"
                  className="form-control"
                  value={link.name}
                  onChange={(e) => handleSocialLinkChange(index, 'name', e.target.value)}
                  placeholder="Social platform name"
                />
              </div>
              <div className="form-group mb-2">
                <label>URL:</label>
                <input
                  type="text"
                  className="form-control"
                  value={link.url}
                  onChange={(e) => handleSocialLinkChange(index, 'url', e.target.value)}
                  placeholder="Social platform URL"
                />
              </div>
            </div>
          ))}
          <button type="button" className="btn btn-secondary" onClick={handleAddSocialLink}>
            Add Social Media
          </button>
        </fieldset>

        <button type="submit" className="btn btn-primary">
          Submit/Generate Portfolio
        </button>
      </form>
    </div>
  );
};

export default DataEntryPage;
