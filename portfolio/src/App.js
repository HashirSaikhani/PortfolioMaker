import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataEntryPage from './components/DataEntryPage';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };
  const containerClasses = darkMode ? 'container py-4 bg-dark text-white' : 'container py-4 bg-light text-dark';

  return (
    <div className={containerClasses}>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-secondary" onClick={toggleTheme}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
      <header className="mb-4">
        <h1>Welcome to My Portfolio Maker</h1>
        <p>This application allows you to create a dynamic portfolio by entering your personal details, projects, and social media links. Fill in the information below to generate your personalized portfolio page.</p>
      </header>
      <DataEntryPage />
    </div>
  );
};

export default App;
