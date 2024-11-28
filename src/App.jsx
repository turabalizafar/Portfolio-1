import React from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="sidebar">
        <ProfileSection />
        <Navigation />
      </div>
      <MainContent />
      <Footer />
    </>
  );
}

function ProfileSection() {
  return (
    <div className="profile-section">
      <img src={reactLogo} alt="Profile" className="profile-pic" />
      <h3>Ghulam Abubaker</h3>
      <div className="social-icons">
        <a href="https://wa.me/+923447066974" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp" aria-label="WhatsApp"></i>
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin" aria-label="LinkedIn"></i>
        </a>
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram" aria-label="Instagram"></i>
        </a>
      </div>
    </div>
  );
}

function Navigation() {
  const navLinks = [
    { name: 'Home', icon: 'fas fa-home' },
    { name: 'About', icon: 'fas fa-user' },
    { name: 'Services', icon: 'fas fa-cog' },
    { name: 'Resume', icon: 'fas fa-file-alt' },
    { name: 'Contact', icon: 'fas fa-envelope' },
  ];

  return (
    <nav>
      <ul className="nav-links">
        {navLinks.map(link => (
          <li key={link.name}>
            <i className={link.icon}></i>
            <a href="#">{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <Intro />
      <Education />
      <ProfessionalDetails />
      <Skills />
      <Contact />
    </div>
  );
}

function Intro() {
  return (
    <div className="intro">
      <p>
        Hello, I'm Ghulam AbuBaker, a Quantity Surveyor Engineer at KEO
        International Consultant in Saudi Arabia.
      </p>
      <p>
        I am a fully qualified Quantity Surveyor with over 15 years of
        professional experience.
      </p>
    </div>
  );
}

function Education() {
  return (
    <div>
      <h3>Education</h3>
      <p>
        MSC Quantity Surveying <br />
        B.Tech (Hons) Civil Engineering, University of Islamabad, Pakistan, 2013 <br />
        Diploma of Associate Engineer (Civil Technology), Punjab, Pakistan, 2007 <br />
        Secondary School Certificate, Punjab, Pakistan, 2004
      </p>
    </div>
  );
}

function ProfessionalDetails() {
  return (
    <div>
      <h3>Profession</h3>
      <p>Civil Engineer / Quantity Surveyor</p>
      <h3>Nationality</h3>
      <p>Pakistani</p>
      <h3>Membership</h3>
      <p>
        Pakistan National Technology Council (NTC) <br />
        Saudi Council of Engineers (SEC) <br />
        Quantity Survey Association of Pakistan (QSAP)
      </p>
    </div>
  );
}

function Skills() {
  return (
    <div>
      <h3>Skills</h3>
      <p>
        Microsoft Office <br />
        AutoCAD (2D, 3D & Civil 3D) <br />
        Autodesk Revit <br />
        Photoshop
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact">
      <h3>Contact</h3>
      <h5>Email Us</h5>
      <div className="circle">
        <i className="fab fa-github" aria-label="GitHub"></i>
        <a href="mailto:turabali2007@yahoo.com" className="transform">turabali2007@yahoo.com</a>
        <br />
        <i className="fab fa-whatsapp" aria-label="WhatsApp"></i>
        <a href="https://wa.me/+923447066974" className="transform">+92-344-7066974</a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer1">
      &copy; <b>Ghulam Abubaker</b> {new Date().getFullYear()} All rights reserved.
    </footer>
  );
}

export default App;