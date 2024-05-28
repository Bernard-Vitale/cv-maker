const Resume = ({ personalInfo, educationInfo, workExpInfo, skills }) => {
  function handleDate(date) {
    if (date === "") return "";
    let [year, month] = date.split("-");
    let newDate = new Date(year, month - 1);
    month = newDate.toLocaleString("en-US", { month: "long" });
    date = `${month} ${newDate.getFullYear()}`;
    return date;
  }

  return (
    <div id="resumeContainer">
      <div id="resumeHeader">
        <h1> {personalInfo.name}</h1>
        <div>
          <p>
            {personalInfo.email} | {personalInfo.phoneNumber} |{" "}
            {personalInfo.location}
          </p>
        </div>
      </div>
      <hr />
      <div id="educationSection">
        <h2>Education</h2>
        <hr />
        {educationInfo.map((edu, index) => (
          <div key={index} className="educationDiv">
            <div>
              <p style={{ fontWeight: "bold" }}>{edu.name}</p>
              <p style={{ fontStyle: "italic" }}>{edu.degree}</p>
            </div>
            <div className="locationDate">
              <p>{edu.location}</p>
              <p style={{ fontStyle: "italic" }}>
                {!edu.stillAttending
                  ? `${handleDate(edu.startDate)} - ${handleDate(edu.endDate)}`
                  : `${handleDate(edu.startDate)} - Present`}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div id="workSection">
        <h2>Work Experience</h2>
        <hr />
        {workExpInfo.map((work, index) => (
          <div key={index} className="workDiv">
            <div className="workDivSub">
              <p style={{ fontWeight: "bold" }}>{work.position}</p>
              <p>
                {!work.stillWorking
                  ? `${handleDate(work.startDate)} - ${handleDate(
                      work.endDate
                    )}`
                  : `${handleDate(work.startDate)} - Present`}
              </p>
            </div>
            <div className="workDivSub">
              <p style={{ fontStyle: "italic" }}>{work.company}</p>
              <p style={{ fontStyle: "italic" }}>{work.location}</p>
            </div>
            <p>{work.description}</p>
          </div>
        ))}
      </div>
      <div id="skillsSection">
        <h2>Skills</h2>
        <hr />
        <ul id="skillsList">
          {skills.map(({ id, skill }) => (
            <li key={id} className="skillListItem">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
