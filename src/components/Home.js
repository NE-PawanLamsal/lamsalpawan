import React from "react";
import './Home.css'

const Home = () => {
    return (<div className="container">
        <div className="name">
            <h1>PAWAN LAMSAL</h1>
            <p>NEC License NO. : 81458</p>
        </div>
    <div className="profile">
    <div className="profile-left">
    <img src="/image.png" alt="Pawan Lamsal" />
  </div>
  <div className="profile-right">
    <p>
      Date of birth: 12/10/1998<br/>
      Nationality: Nepalese<br/>
      Gender: Male<br/>
      Phone number: (+977) 9846029656 (Mobile)<br/>
      Email address: <a href="mailto:social.pawan.lamsal@gmail.com">erpawanlamsal@gmail.com</a><br />
      Address: Chhorepatan, Pokhara Metropolitan-17, Kaski, Nepal<br />
    </p>
  </div>
    </div>
    <div className="work-experience">
      <h3>WORK EXPERIENCE</h3>
      <div className="experience">
        <h5>
          16/01/2024 - CURRENT Pokhara, Nepal
        </h5>
        <h4>
          PART TIME LECTURER INSTITUTE OF ENGINEERING,
          PASCHIMANCHAL CAMPUS
        </h4>
        <ul>
          <li>
            <h6>Computer Programming (CT 101)</h6>
            <ul>
              <li>
                6 Lectures, 6 practical classes and 2 tutorial classes per week
              </li>
            </ul>
          </li>
          <li>
            <h6>Artificial Intelligence (CT 653)</h6>
            <ul>
              <li>
                3 Lectures, 1.5 practical classes and 1 tutorial class per
                week
              </li>
            </ul>
          </li>
          <li>
            <h6>Operating Systems (CT 656)</h6>
            <ul>
              <li>
                3 Lectures, 1.5 practical classes and 1 tutorial class per
                week
              </li>
            </ul>
          </li>
          <li>
            <h6>Computer Graphics (CT 653)</h6>
            <ul>
              <li>
                3 Lectures, 1.5 practical classes and 1 tutorial class per
                week
              </li>
            </ul>
          </li>
        </ul>
        
      </div>
      <div className="experience">
        <h5>
          2021 - CURRENT Pokhara, Nepal
        </h5>
        <h4>
          <b>FREELANCE FLUTTER DEVELOPER </b> SELF EMPLOYED
        </h4>
        <ul>
          <li>
          Key Projects at: <a href="https://github.com/NE-PawanLamsal">https://github.com/NE-PawanLamsal </a>
           
          </li>
          <li>
          User Interface and Experience Design
           
          </li>
          <li>
          Backend design with php, node, firebase and mysql.
           
          </li>
        </ul>
      </div>

      <div className="experience">
        <h5>
          2020 - CURRENT Pokhara, Nepal
        </h5>
        <h4>
          <b>FREELANCE ANDROID DEVELOPER </b> SELF EMPLOYED
        </h4>
        <ul>
          <li>
          Key Projects at: <a href="https://github.com/NE-PawanLamsal">https://github.com/NE-PawanLamsal </a>
           
          </li>
          <li>
          User Interface and Experience Design
          </li>
          <li>
          Cross-Functional Teamwork
          </li>
          <li>
          Continuous Learning and Skill Enhancement
          </li>
        </ul>
      </div>

    </div>
    <div className="education">
      <h3>EDUCATION AND TRAINING</h3>
      <div className="degree">
        <h5>
          2018 - 2023 Bachelor of Engineering in Computer Engineering
        </h5>
        <h4>
          Pokhara University, Nepal
        </h4>
        <p>
          CGPA: 3.43/4.0
        </p>
        <br />
      </div>
      <div className="degree">
        <h5>
          2015 - 2017 Higher Secondary Education
        </h5>
        <h4>
          Motherland Secondary School, Nepal
        </h4>
        <p>
          Percentage: 72.80%
        </p>
        <br />
      </div>
      <div className="degree">
        <h5>
          2002 - 2015 Secondary Education
        </h5>
        <h4>
          Motherland Higher Secondary School, Nepal
        </h4>
        <p>
          Percentage: 81.25%
        </p>
        <br />
      </div>
      <div className="degree">
        <h5>
          2016 - 2016 IT.1.1X: INTRODUCTION TO PROGRAMMING WITH JAVA PART 1: STARTING TO CODE WITH JAVA
        </h5>
        <h4>
        UC3Mx, an online learning initiative of Universidad Carlos III de Madrid through edX.
        </h4>
        <p>
          Certificate: <a href="https://courses.edx.org/certificates/adb507e856f74f6ba9efa9a8f8ea622c">https://courses.edx.org/certificates/adb507e856f74f6ba9efa9a8f8ea622c </a>
        </p>
        <br />
      </div>
      <div className="degree">
        <h5>
          2015 - 2015 UNDERSTANDING RESEARCH METHODS
        </h5>
        <h4>
        University of London and SOAS University of London and offered through Coursera 
        </h4>
        <p>
          Certificate: <a href="https://coursera.org/verify/FF7CLF8QWZ9X">https://coursera.org/verify/FF7CLF8QWZ9X</a>
        </p>
        <br />
      </div>

    </div>
    <div className="skills">
      <h3>SKILLS</h3>
      <ul>
        <li>Java</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Dart</li>
        <li>PHP</li>
        <li>Python</li>
      </ul>
    </div>
  </div>    );
};


export default Home;
