import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProjectList from './ProjectList';


const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/projects', {
        name: projectName,
        description: projectDescription,
      });
      const successMessage = 'Project created successfully!';
      setProjectName('');
      setProjectDescription('');
      navigate('/annotation-platform', { state: { successMessage } });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    
    <div className='project-form'>
      
      <form onSubmit={handleSubmit}>
        <h2>Create New Project</h2>
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
        <textarea
          placeholder="Project Description"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          required
        />
        <button type="submit">Create Project</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
      </form>

      <h2>Existing Projects:</h2>
      <ProjectList />
    </div>
  );
};

export default ProjectForm;