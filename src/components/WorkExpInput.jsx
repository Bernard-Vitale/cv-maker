import { v4 as uuidv4 } from "uuid";

const WorkExpInput = ({ workExp, setWorkExp }) => {
  const handleInputChange = (id, field, value) => {
    setWorkExp((prevEducationInfo) =>
      prevEducationInfo.map((info) =>
        info.id === id ? { ...info, [field]: value } : info
      )
    );
  };
  const handleDelete = (id) => {
    setWorkExp((prevEducationInfo) =>
      prevEducationInfo.filter((info) => info.id !== id)
    );
  };
  const handleAdd = () => {
    setWorkExp((prevWorkInfo) => [
      ...prevWorkInfo,
      {
        id: uuidv4(),
        name: "",
        degree: "",
        location: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };
  return (
    <>
      {workExp.map(
        (
          { id, position, company, location, startDate, endDate, description },
          index
        ) => (
          <div key={id} className="forms workForms">
            <h3>Work Experience {index + 1}:</h3>{" "}
            <div className="formItem">
              <label htmlFor={`positionInput`}>Position:</label>
              <input
                type="text"
                id={`positionInput`}
                placeholder="Position"
                value={position || ""}
                onChange={(e) =>
                  handleInputChange(id, "position", e.target.value)
                }
              />
            </div>
            <div className="formItem">
              <label htmlFor={`companyInput`}>Company:</label>
              <input
                type="text"
                id={`companyInput`}
                placeholder="Company"
                value={company || ""}
                onChange={(e) =>
                  handleInputChange(id, "company", e.target.value)
                }
              />
            </div>
            <div className="formItem">
              <label htmlFor={`locationInput`}>Location:</label>
              <input
                type="text"
                id={`locationInput`}
                placeholder="Location"
                value={location || ""}
                onChange={(e) =>
                  handleInputChange(id, "location", e.target.value)
                }
              />
            </div>
            <div className="formItem" id="dateInputs">
              <div>
                <label htmlFor={`startInput`}>Start Date:</label>
                <input
                  type="month"
                  id={`startInput`}
                  value={startDate || ""}
                  onChange={(e) =>
                    handleInputChange(id, "startDate", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor={`endInput`}>End Date:</label>
                <input
                  type="month"
                  id={`endInput`}
                  value={endDate || ""}
                  onChange={(e) =>
                    handleInputChange(id, "endDate", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="formItem">
              <textarea
                type="textArea"
                className="jobDescription"
                placeholder="Description of your job"
                value={description || ""}
                onChange={(e) =>
                  handleInputChange(id, "description", e.target.value)
                }
              />
            </div>
            <button className="deleteButton" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </div>
        )
      )}
      <button className="addBtn" onClick={() => handleAdd()}>
        Add
      </button>
    </>
  );
};

export default WorkExpInput;
