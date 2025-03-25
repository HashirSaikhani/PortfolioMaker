import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DataEntryPage from './components/DataEntryPage';
import ProjectsSection from './components/ProjectsSection';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [bio, setBio] = useState('');
  const [projects, setProjects] = useState([{ title: '', description: '', image: '', github: '' }]);
  const [viewWork, setViewWork] = useState(false);
  const toggleTheme = () => setDarkMode(prev => !prev);
  const appClasses = darkMode ? 'bg-dark text-white' : 'bg-light text-dark';

  return (
    <div className={`${appClasses} min-vh-100`}> 
      <Navbar />
      <div className="container d-flex justify-content-end mb-3">
        <button className="btn btn-secondary" onClick={toggleTheme}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
      <header className="container mb-4">
        <h1>Welcome to My Portfolio Maker</h1>
        <p>This application allows you to create a dynamic portfolio by entering your personal details, projects, and social media links. Fill in the information below to generate your personalized portfolio page.</p>
      </header>
      <HeroSection
        studentName={studentName}
        shortBio={bio}
        ctaLabel="View My Work"
        onCTAClick={() => setViewWork(prev => !prev)}
      />
      <div className="container">
        {viewWork ? (
          <ProjectsSection projects={projects} />
        ) : (
          <DataEntryPage 
            studentName={studentName}
            bio={bio}
            setStudentName={setStudentName}
            setBio={setBio}
            projects={projects}
            setProjects={setProjects}
          />
        )}
      </div>
    </div>
  );
};

export default App;
