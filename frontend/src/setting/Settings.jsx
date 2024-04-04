import React from 'react';
import './settings.css'

class SettingsPage extends React.Component {
  render() {
    return (
      <div className='settings'>
        <h1>Settings</h1>
        <ul>
          <li>Account</li>
          <li>Notifications</li>
          <li>Change Language</li>
          <li>Terms and Conditions</li>
          <li>Privacy and Policy</li>
          <li>About</li>
          <li>Logout</li>
        </ul>
      </div>
    );
  }
}

export default SettingsPage;