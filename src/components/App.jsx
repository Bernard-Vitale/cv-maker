import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "../App.css";
import Resume from "./Resume.jsx";
import HeaderInput from "./HeaderInput.jsx";
import EducationInput from "./EducationInput.jsx";
import WorkExpInput from "./WorkExpInput.jsx";
import SkillsInput from "./SkillsInput.jsx";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Jane Doe",
    phoneNumber: "(123) 456-7890",
    email: "example@mail.com",
    location: "New York, USA",
  });

  const [educationInfo, setEducationInfo] = useState([
    {
      id: uuidv4(),
      name: "Awesome Univerity",
      degree: "Bachelor of Science in Computer Science",
      location: "Tech Town, CA",
      startDate: "2020-11",
      endDate: "2024-05",
    },
  ]);

  const [workExp, setWorkExp] = useState([
    {
      id: uuidv4(),
      position: "Software Engineer",
      company: "Google",
      location: "New York, USA",
      startDate: "2023-01",
      endDate: "2024-03",
      description:
        "As a Software Engineer at Google, I developed and maintained scalable web applications using React and Node.js, resulting in a 30% increase in user engagement. Additionally, I collaborated with cross-functional teams to design and implement new features, enhancing product functionality and user experience. Furthermore, I led a team of 5 engineers in the successful migration of legacy systems to modern cloud-based infrastructure, reducing operational costs by 20%. Moreover, I implemented CI/CD pipelines using Jenkins and Docker, accelerating the release cycle by 50%.",
    },
  ]);

  const [skills, setSkills] = useState([
    { id: uuidv4(), skill: "React" },
    { id: uuidv4(), skill: "Javascript" },
    { id: uuidv4(), skill: "HTML/CSS" },
    { id: uuidv4(), skill: "Node.js" },
    { id: uuidv4(), skill: "Express.js" },
    { id: uuidv4(), skill: "Python" },
    { id: uuidv4(), skill: "Hardworker" },
    { id: uuidv4(), skill: "Leadership" },
    { id: uuidv4(), skill: "Quick Learner" },
  ]);

  const [showHeaderInput, setShowHeaderInput] = useState(false);
  const [showSkillsInput, setShowSkillsInput] = useState(false);
  const [showEducationInput, setShowEducationInput] = useState(false);
  const [showWorkInput, setShowWorkInput] = useState(false);

  function toggleHeaderInput() {
    setShowHeaderInput(!showHeaderInput);
  }
  function toggleSkillsInput() {
    setShowSkillsInput(!showSkillsInput);
  }
  function toggleEducationInput() {
    setShowEducationInput(!showEducationInput);
  }
  function toggleWorkInput() {
    setShowWorkInput(!showWorkInput);
  }
  return (
    <div id="mainContainer">
      <div id="editContainer">
        <div className="inputSection">
          <button className="toggleButton" onClick={toggleHeaderInput}>
            <h2 className="formTitles">
              Personal Information
              <span>{showHeaderInput ? "▲" : "▼"}</span>
            </h2>
          </button>
          {showHeaderInput && (
            <HeaderInput
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
            />
          )}
        </div>
        <div className="inputSection">
          <button className="toggleButton" onClick={toggleEducationInput}>
            <h2 className="formTitles">
              Education
              <span>{showEducationInput ? "▲" : "▼"}</span>
            </h2>
          </button>
          {showEducationInput && (
            <EducationInput
              educationInfo={educationInfo}
              setEducationInfo={setEducationInfo}
            />
          )}
        </div>
        <div className="inputSection">
          <button className="toggleButton" onClick={toggleWorkInput}>
            <h2 className="formTitles">
              Work Exprience
              <span>{showWorkInput ? "▲" : "▼"}</span>
            </h2>
          </button>
          {showWorkInput && (
            <WorkExpInput workExp={workExp} setWorkExp={setWorkExp} />
          )}
        </div>
        <div className="inputSection">
          <button className="toggleButton" onClick={toggleSkillsInput}>
            <h2 className="formTitles">
              Skills
              <span>{showSkillsInput ? "▲" : "▼"}</span>
            </h2>
          </button>
          {showSkillsInput && (
            <SkillsInput skills={skills} setSkills={setSkills} />
          )}
        </div>
      </div>
      <Resume
        personalInfo={personalInfo}
        educationInfo={educationInfo}
        workExpInfo={workExp}
        skills={skills}
      />
    </div>
  );
}

export default App;
