import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
     
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        
      </div>
      <h1>Vite + React</h1> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit amet, quae autem eos nesciunt aspernatur ratione praesentium tenetur, tempora dicta reiciendis natus? Nesciunt voluptate nemo in vel? Autem, molestiae et.</p> */}
      <div className="sidebar">
            <div className="profile-section">
              <img src={reactLogo} alt="Profile pic" className="profile-pic" />
              <h3>Ghulam Abubaker</h3>
              <div class="social-icons">
        <a href="https://wa.me/+923447066974" target="_blank">
        <i class="fab fa-whatsapp"></i>
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank">
            <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/yourprofile" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
    </div>
            </div>
            <nav>
              <ul className="nav-links">
                <li>
                  <i className="fas fa-user-circle"></i>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Resume</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="main-content">

      <div class="intro">
        <p>
          Hello I'm Ghulam AbuBaker, a Quantity Serveyour Engineer in KEO
          International Consultant in Saudia Arabia.
        </p>
        <p>
          I am a fully qualified Quantity Surveyour with over 15 years of
          professional experience.
        </p>
      </div>
      <div>

      <h3>Education</h3>
      <p>
        MSC Quantity Surveyour <br />
        Bachelor of Technology(B-Tech Hons) Civil Engineering University,
        Islamabad, Pakistan, 2013 <br />
        Diploma of Associate Engineer(Civil Technology) Punjab, Pakistan, 2007
        <br />
        Secondary School Certificate Punjab, Pakistan 2004
      </p>
      </div>
      <div>

      <h3>Profession</h3>
      <p>Civil Engineer/Quantity Surveyour</p>
      <h3>Nationality</h3>
      <p>Pakistani</p>
      </div>
      <div>
      <h3>Membership</h3>
        <p>
          Pakistan National Technology Council(NTC) <br />
          Saudi Council of Engineers(SEC) <br />
          Quantity Survey Association of Pakistan(QSAP)
        </p>
      </div>
      <h3>Skills</h3>
      <p>
        Microsoft Office <br />
        AutoCAD 2D, 3D & Civil 3D <br />
        Autodesk Revit <br />
        Photoshop
      </p>

      <div className="contact">
        <h3>Contact</h3>
        <h5>Email Us</h5>
        <div className="circle">

        <i class="fab fa-github"></i>
        <a href="mailto:turabali2007@yahoo.com" target="_blank" class="transform">turabali2007@yahoo.com</a>
        <br />
        <i class="fab fa-whatsapp"></i>
        <a href="https://wa.me/+923447066974" target="_blank" class="transform">+92-344-7066974</a>
        </div>
      </div>
      
          </div>
          <footer>
            <map name=""></map>
          </footer>
      <footer class="footer1">
        &copy; <b>Ghulam Abubaker</b> {new Date().getFullYear()} All rights
        reserved.
      </footer>
    </>
  );
}

export default App;
