import React, { useState} from 'react';

export default function NotificationPreferences({ onSelectMethod }) {
    const [notificationMethod, setNotificationMethod] = useState('');
  
    const handleChange = (e) => {
      const method = e.target.value;
      setNotificationMethod(method);
      onSelectMethod(method);
    };
  
    return (
      <div >
        <h5>Choose your preferred notification method:</h5>
        <label className='mx-4 my-4'>
          <input
            type="radio"
            className="form-check-input"
            value="Email"
            checked={notificationMethod === 'Email'}
            onChange={handleChange}
          />
          Email
        </label>
        <label className='mx-4  my-4'>
          <input
            type="radio"
            className="form-check-input"
            value="SMS"
            checked={notificationMethod === 'SMS'}
            onChange={handleChange}
          />
          SMS
        </label>
        <div>
          {notificationMethod === 'Email' ? (
            <p>You will receive notifications via Email.</p>
          ) : notificationMethod === 'SMS' ? (
            <p>You will receive notifications via SMS.</p>
          ) : (
            <p>Please select a notification method.</p>
          )}
        </div>
      </div>
    );
  }
  
