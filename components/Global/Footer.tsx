// components/Footer.js
import React from 'react';
import { FaFacebook, FaTimes } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white p-8 ">
      <div className="flex justify-around ">
        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">CONTACT</h2>
          <p>Aerotech Aircraft Maintenance Ltd</p>
          <p>Airpark Flight Centre</p>
          <p>Coventry Airport</p>
          <p>Rowley Road</p>
          <p>Baginton</p>
          <p>Coventry, CV3 4FR</p>
          <br />
          <p>Phone: 02476 306888</p>
          <p>Email: enquiries@aerotech-uk.co.uk</p>
          <p>Web: www.aerotech-uk.co.uk</p>
        </div>

        {/* Social Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">GET SOCIAL</h2>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white text-2xl" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTimes className="text-white text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
