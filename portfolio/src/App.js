// src/App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMeSection from './components/AboutMeSection';
import DataEntryPage from './components/DataEntryPage';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [viewWork, setViewWork] = useState(false);
  const [showPreviewAfterSubmit, setShowPreviewAfterSubmit] = useState(false);

  const [studentName, setStudentName] = useState('');
  const [bio, setBio] = useState('');
  const [introDetails, setIntroDetails] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [skills, setSkills] = useState('');
  const [interests, setInterests] = useState('');
  const [aboutDescription, setAboutDescription] = useState('');
  const [projects, setProjects] = useState([{ title: '', description: '', image: '', github: '' }]);
  const [socialLinks, setSocialLinks] = useState([{ name: '', url: '' }]);

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
        <p>
          This application allows you to create a dynamic portfolio by entering your personal
          details, projects, and social media links. Fill in the information below to generate your
          personalized portfolio page.
        </p>
      </header>

      <HeroSection
        studentName={studentName}
        shortBio={bio}
        ctaLabel="View My Work"
        onCTAClick={() => setViewWork(prev => !prev)}
      />

      <div className="container">
        {viewWork ? (
          <>
            <AboutMeSection
              profilePicture={profilePicture}
              skills={skills.split(',').map(s => s.trim())}
              bio={aboutDescription}
            />
            <ProjectsSection projects={projects} setProjects={setProjects} />

          </>
        ) : (
          <>
            <DataEntryPage
              studentName={studentName}
              setStudentName={setStudentName}
              bio={bio}
              setBio={setBio}
              introDetails={introDetails}
              setIntroDetails={setIntroDetails}
              profilePicture={profilePicture}
              setProfilePicture={setProfilePicture}
              skills={skills}
              setSkills={setSkills}
              interests={interests}
              setInterests={setInterests}
              aboutDescription={aboutDescription}
              setAboutDescription={setAboutDescription}
              projects={projects}
              setProjects={setProjects}
              socialLinks={socialLinks}
              setSocialLinks={setSocialLinks}
              setShowPreviewAfterSubmit={setShowPreviewAfterSubmit}
            />

            {showPreviewAfterSubmit && (
              <>
                <h2 className="text-center mt-5 mb-4">Live Portfolio Preview</h2>
                <AboutMeSection
                  profilePicture={profilePicture}
                  skills={skills.split(',').map(s => s.trim())}
                  bio={aboutDescription}
                />
               <ProjectsSection projects={projects} setProjects={setProjects} />
              </>
            )}
          </>
        )}
      </div>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
