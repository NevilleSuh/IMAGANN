import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import AnnotationPlatform from './components/AnnotationPlatform';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectForm from './components/ProjectForm';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
          </>
        } />
        <Route path="/annotation-platform" element={<AnnotationPlatform />} />
        <Route path="/project-form" element={<ProjectForm />} /> {/* Additional Route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;