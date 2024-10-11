import React, { useEffect, useState } from 'react';
import './profile.css';  // CSS file for styling

const Profile = () => {
  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');
  const [isEditing, setIsEditing] = useState(false); // Toggle for edit mode

  useEffect(() => {
    // Retrieve stored data from localStorage
    const storedUsername = localStorage.getItem('username') || 'John Doe';  // Default if not found
    const storedUseremail = localStorage.getItem('useremail') || 'john.doe@example.com';  // Default if not found

    setUsername(storedUsername);
    setUseremail(storedUseremail);
  }, []);

  // Function to toggle edit mode
  const handleEditClick = () => {
    setIsEditing(!isEditing); // Toggle edit state
  };

  // Function to handle form submission and save updated profile to localStorage
  const handleFormSubmit = (event) => {
    event.preventDefault();  // Prevent default form submission

    // Save the updated profile info to localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('useremail', useremail);

    // Exit edit mode after saving
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <h2 className="profile-header">My Profile</h2>

      {isEditing ? (
        // Form to edit profile
        <form className="profile-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="username">Name:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="useremail">Email:</label>
            <input
              type="email"
              id="useremail"
              value={useremail}
             
            />
          </div>
          <div className="btn-group">
            <button className="buttonS" type="submit">Save</button>
            <button className="buttonC" type="button" onClick={handleEditClick}>Cancel</button>
          </div>
        </form>
      ) : (
        // Display profile information when not in edit mode
        <div className="profile-info">
          <p><strong>Name:</strong> {username}</p>
          <p><strong>Email:</strong> {useremail}</p>
        </div>
      )}

      <button className="buttonE" onClick={handleEditClick}>
        {isEditing ? 'Cancel' : 'Edit Profile'}
      </button>

      {/* Welcome message */}
      <div className='welcome-message'>
        <h2>THANK YOU FOR CHOOSING REAL MADRID</h2>
        <h3>Welcome, {username}!</h3>
        <p>We're excited to have you with us at Real Madrid!</p>
        <p>Check out the latest <a href="/shop"><strong>Nike Mercurial</strong></a> now available in the shop. Get yours today!</p>
        <p>Don't miss out on our upcoming match against FC Barcelona. Book your <a href="/schedule"><u>Ticket</u></a> now for an exclusive <a href="/schedule"><strong>20% discount</strong></a> for members like you!</p>
        <p>Stay tuned for more updates and exclusive offers. Your journey with Real Madrid has just begun!</p>
      </div>
    </div>
  );
};

export default Profile;
