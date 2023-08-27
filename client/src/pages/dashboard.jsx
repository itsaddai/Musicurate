import './dashboard.css'; // Import the CSS file for styling
import React from 'react';
//

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header>
        <h1>Welcome to Your Dashboard</h1>
        <button className="upload-button">Upload</button>
      </header>
      <div className="upload-ui">
        {/* Include the UI for platform selection and upload preparation here */}
      </div>
    </div>
  );
};

export default Dashboard;