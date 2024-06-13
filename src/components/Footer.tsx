import React from "react";
import './Footer.css';
import {FaTwitter, FaInstagram} from 'react-icons/fa';
const Footer = () => {
    return (
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 React-Entreprise.</p>
          <div className="reseaux">
            <p>
                <a href="https://www.instagram.com"><FaInstagram/> Instagram React</a> | <a href="https://www.x.com"><FaTwitter/> Twitter React</a>
            </p>
          </div>

          <p>
            <a href="/Mentions">Mentions légales</a> | <a href="/Contact">Formulaire de contact</a>
          </p>
        </div>
      </footer>
    );
  };
export default Footer;