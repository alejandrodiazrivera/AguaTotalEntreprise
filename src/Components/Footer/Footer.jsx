import React, { useState } from 'react';
import './Footer.css'; // Make sure to import the CSS file
import Privatlivspolitik from './Privatlivspolitik'; // Import the Privatlivspolitik component
import Brugsbetingelser from './Brugsbetingelser';

export const Footer = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const toggleTermsPopup = () => {
    setIsTermsOpen(!isTermsOpen);
  };

  const togglePrivacyPopup = () => {
    setIsPrivacyOpen(!isPrivacyOpen);
  };
  return (
    <div className='footer'>
    <p>Aguas Total Entreprise © 2024 Alle rettigheder forbeholdes │ CVR: 40960112</p>
    <ul>
      <li onClick={togglePrivacyPopup}>Cookie- og privatlivspolitik</li>
    </ul>
    {isTermsOpen && (
      <div className='popup'>
        <div className='popup-content'>
          <h2>Brugsbetingelser</h2>
          <Brugsbetingelser/>
          <button onClick={toggleTermsPopup} className='btn dark-btn'>Luk</button>
          </div>
        </div>
      )}
            {isPrivacyOpen && (
        <div className='popup'>
          <div className='popup-content'>
            <h2>Privatlivspolitik</h2>
            <Privatlivspolitik />
            <button onClick={togglePrivacyPopup} className='btn dark-btn'>Luk</button>
          </div>
        </div>
      )}
    </div>
  );
};


export default Footer;