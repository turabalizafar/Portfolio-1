import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./pop.js";
import { CircleLoader } from "react-spinners";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css'
import microsoft from "./assets/microsoft.jpg";
import autocad from "./assets/autocad.jpg";
import photoshop from "./assets/photoshop.jpg";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }); 

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-content">
      {isLoading ? (
        <div className="loading-container">
          <CircleLoader color="#3498db" loading={isLoading} size={70} />
        </div>
      ) : (
        <div className="app">
          {/* Sidebar */}
          <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
            <ProfileSection />
            <Navigation />
          </div>

          {/* Main Content */}
          <div className="main-content">
            <div className="menu-icon" onClick={toggleSidebar}>
              <i className={`fas ${isSidebarOpen ? "fa-times" : "fa-bars"}`}></i>
            </div>
            <Header toggleSidebar={toggleSidebar} />
            <MainContent />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

function Header({ toggleSidebar }) {
  return (
    <header>
      <div className="menu-icon" onClick={toggleSidebar}>
        {/* <i className="fas fa-bars"></i> */}
      </div>
    </header>
  );
}


function toggleSidebar(){
  const navLinks = [
    { name: 'Home', icon: 'fas fa-home' },
    { name: 'About', icon: 'fas fa-user' },
    { name: 'Projects', icon: 'fas fa-cog' },
    { name: 'Resume', icon: 'fas fa-file-alt' },
    { name: 'Contact', icon: 'fas fa-envelope' },
  ];
  return (
    <nav>
      
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
    {/* <script src="script.js"></script> */}
    </nav>
    
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
    { name: 'Home', icon: 'fas fa-home', link: 'intro' },
    { name: 'About', icon: 'fas fa-user' },
    { name: 'Projects', icon: 'fas fa-cog', link: 'projects' },
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
      <Projects />
      <Contact />
    </div>
  );
}

function Intro() {
  return (
    <div className="intro">
      <p>
      Hello, my name is Ghulam AbuBaker, and I am a highly experienced Quantity Surveyor Engineer currently working at KEO International Consultants in Saudi Arabia. With over 15 years of professional experience, I have honed my expertise in cost management, project budgeting, and financial control across various large-scale projects. My role involves ensuring accurate cost estimation, managing contracts, and maintaining financial transparency throughout the project lifecycle. As a fully qualified Quantity Surveyor, I am well-versed in industry standards and practices, consistently delivering value and efficiency in every project I undertake. I specialize in both pre-contract and post-contract services, from tendering to final account settlement. My extensive experience has equipped me with the skills to handle complex projects and deliver cost-effective solutions.
      </p>
    </div>
  );
}

function Education() {
  return (
    <div className="education">
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

function Projects() {
  return (
     <div className="projects">

<h3 className="proj">Projects</h3>
<div className="project1">
  <h4>Project 1</h4>
  <p></p>
</div>
<div className="project1">
<h4>Project 2</h4>
<p></p>
</div>
<div className="project1">
<h4>Project 3</h4>
<p></p>
</div>
<div className="project1">
<h4>Project 4</h4>
<p></p>
</div>

</div>
  );
}

function ProfessionalDetails() {
  return (
    <div className="professional-details">
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
      <h3 className="skills">Skills</h3>
    </div>
  );
}

function Skills() {
  const images = [
    microsoft, autocad, photoshop
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 2000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  return (
    <div className="slider">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
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