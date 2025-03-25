import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = ({ studentName, shortBio, ctaLabel, onCTAClick }) => {
  return (
    <section id="home" className="py-5">
      <div className="container text-center">
        <h1 className="display-4">{studentName}</h1>
        <p className="lead">{shortBio}</p>
        <button className="btn btn-primary btn-lg" onClick={onCTAClick}>
          {ctaLabel}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
