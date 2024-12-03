
import React, { useState } from 'react';
import './App.css';
import CitySelect from './CitySelect';
import CheckboxForm from './CheckboxForm';
import { useRef } from 'react';
import NotificationPreferences from './NotificationPreferences';

function App() {
  const [notificationMethod, setNotificationMethod] = useState('');
  const [showDetailsForm, setShowDetailsForm] = useState(false);
  const [city, setCity] = useState('');
  const [skills, setSkills] = useState([]);
  const [showSummary, setShowSummary] = useState(false); 
  // const showSummary = useRef(null);

  // const handleSelectMethod = (method) => {
  //   setNotificationMethod(method);
  //   setShowDetailsForm(false); // Reset the form visibility
  //   setShowSummary(false); // Reset summary visibility
  //   setTimeout(() => {
  //     setShowDetailsForm(true);
  //   }, 3000); // Delay of 3 seconds
  // };



    const handleSubmit = () => {
      setShowSummary(true); 
    };
    const handleBackToForm = () => {
      setShowSummary(false); 
    };
 
  return (
    <div className="app">
      <h1 className='text-info'>User Preferences Form</h1>
      
      {!showSummary && (
        <>
          <NotificationPreferences onSelectMethod={setNotificationMethod} />
          <div className="form-section details-form">
            <CitySelect onCityChange={setCity} />
            <CheckboxForm onSkillsChange={setSkills} />
          </div>
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </>
      )}
      
      
      {showSummary && (
        <div className="summery">
          <h3>Summary:</h3>
          <p>Notification Method: {notificationMethod || 'Not selected'}</p>
          <p>City: {city || 'Not selected'}</p>
          <p>Skills: {skills.length > 0 ? skills.join(', ') : 'No skills selected'}</p>
          <button className='btn btn-info mt-2' onClick={handleBackToForm}>
            Back to Form
          </button>
        </div>
      )}
    </div>
  );
}
export default App;



