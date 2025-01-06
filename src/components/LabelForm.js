import React, { useState } from 'react';

const LabelForm = ({ setLabels }) => {
  const [label, setLabel] = useState('');

  const handleAddLabel = () => {
    if (label.trim()) { // Prevent adding empty labels
      setLabels((prevLabels) => [...prevLabels, label]);
      setLabel('');
    }
  };

  return (
    <div className="label-form">
      <h2>Create a New Label</h2>
      <form>
        <input
          type="text"
          placeholder="Label Name"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
        <button type="button" onClick={handleAddLabel}>Add Label</button>
      </form>
    </div>
  );
};

export default LabelForm;