import { v4 as uuidv4 } from "uuid";
const EducationInput = ({ educationInfo, setEducationInfo }) => {
  const handleInputChange = (id, field, value) => {
    setEducationInfo((prevEducationInfo) =>
      prevEducationInfo.map((info) =>
        info.id === id ? { ...info, [field]: value } : info
      )
    );
  };
  const handleDelete = (id) => {
    setEducationInfo((prevEducationInfo) =>
      prevEducationInfo.filter((info) => info.id !== id)
    );
  };
  const handleAdd = () => {
    setEducationInfo((prevEducationInfo) => [
      ...prevEducationInfo,
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
      {educationInfo.map(
        ({ id, name, degree, location, startDate, endDate }, index) => (
          <div key={id} className="forms educationForms">
            <h3>Education {index + 1}:</h3>{" "}
            <div className="formItem">
              <label htmlFor={`institutionInput`}>Institution Name:</label>
              <input
                type="text"
                id={`institutionInput`}
                placeholder="Institution Name"
                value={name || ""}
                onChange={(e) => handleInputChange(id, "name", e.target.value)}
              />
            </div>
            <div className="formItem">
              <label htmlFor={`degreeInput`}>Degree:</label>
              <input
                type="text"
                id={`degreeInput`}
                placeholder="Degree"
                value={degree || ""}
                onChange={(e) =>
                  handleInputChange(id, "degree", e.target.value)
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
            <button className="deleteButton" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </div>
        )
      )}
      <button
        id="educationAddBtn"
        className="addBtn"
        onClick={() => handleAdd()}
      >
        Add
      </button>
    </>
  );
};

export default EducationInput;
