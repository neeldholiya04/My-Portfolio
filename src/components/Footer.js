import React from 'react';
import './Footer.css';
import {FaHome, FaUser, FaCode, FaFileAlt, FaGithub, FaLinkedinIn, FaInstagram, FaQuora} from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="logo">
                <p>Developed by Neel Dholiya</p>
            </div>
            <div className="logo">
                <p>Copyrigt © 2023</p>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><FaGithub/></li>
                    <li><FaLinkedinIn/></li>
                    <li><FaInstagram/></li>
                    <li><FaQuora/></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
