// import React from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Hero from './components/Hero';
// import Features from './components/Features';
// import AnnotationPlatform from './components/AnnotationPlatform';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={
//           <>
//             <Hero />
//             <Features />
//           </>
//         } />
//         <Route path="/annotation-platform" element={<AnnotationPlatform />} />
//         <Route path="/AnnotationPlatform" element={<AnnotationPlatform />} /> {/* Additional Route */}
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import AnnotationPlatform from './components/AnnotationPlatform';
import Preloader from './components/Preloader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Set to desired loading time (e.g., 3 seconds)

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <Router>
      {loading ? (
        <Preloader /> // Show the preloader while loading
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
              </>
            } />
            <Route path="/annotation-platform" element={<AnnotationPlatform />} />
            <Route path="/AnnotationPlatform" element={<AnnotationPlatform />} /> {/* Additional Route */}
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;