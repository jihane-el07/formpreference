import React, { useState, useRef } from 'react';
export default function CheckboxForm({ onSkillsChange }) {
    const checkboxRefs = useRef([]);
    const [selectedSkills, setSelectedSkills] = useState([]);
  
    const handleSelectAll = () => {
      checkboxRefs.current.forEach((checkbox) => (checkbox.checked = true));
      updateSelectedSkills();
    };
  
    const handleDeselectAll = () => {
      checkboxRefs.current.forEach((checkbox) => (checkbox.checked = false));
      updateSelectedSkills();
    };
  
    const updateSelectedSkills = () => {
      const selected = checkboxRefs.current
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);
      setSelectedSkills(selected);
      onSkillsChange(selected);
    };
  
    return (
      <div>
        <h3>Select your skills:</h3>
        <label className='mx-4'>
          <input
            type="checkbox"
            value="React"
            className='form-check-input mx-2'
            ref={(el) => (checkboxRefs.current[0] = el)}
            onChange={updateSelectedSkills}
          />
          React
        </label>
        <label className='mx-4'>
          <input
            type="checkbox"
            value="Node.js"
            className='form-check-input mx-2 '
            ref={(el) => (checkboxRefs.current[1] = el)}
            onChange={updateSelectedSkills}
          />
          Node.js
        </label>
        <label className='mx-4'>
          <input
            type="checkbox"
            value="JavaScript"
            className='form-check-input mx-2'
            ref={(el) => (checkboxRefs.current[2] = el)}
            onChange={updateSelectedSkills}
          />
          JavaScript
        </label>
        <div className='mt-4'>
          <button type="button" className='btn btn-info' onClick={handleSelectAll}>
            Select All
          </button>
          <button type="button" className='btn btn-info mx-3' onClick={handleDeselectAll}>
            Deselect All
          </button>
        </div>
        <p className='mt-4'>Selected Skills: {selectedSkills.join(', ')}</p>
      </div>
    );
  }