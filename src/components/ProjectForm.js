import React, { useState } from 'react';

const ProjectForm = ({ setProject }) => {
  const [projectName, setProjectName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setProject(projectName);
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
      <button type="submit">Create Project</button>
      </form>
    </div>
  );
};

export default ProjectForm;