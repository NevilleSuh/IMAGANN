import React from 'react';
import '../App.css'; // Import App.css where the preloader styles are defined

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="loader">
        <span className="text">Imagann</span>
      </div>
    </div>
  );
};

export default Preloader;