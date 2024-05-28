const HeaderInput = ({ personalInfo, setPersonalInfo }) => {
  return (
    <>
      <div className="forms">
        <div className="formItem">
          <label htmlFor="nameInput">Full Name:</label>
          <input
            type="text"
            id="nameInput"
            placeholder="Full Name"
            value={personalInfo.name}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, name: e.target.value })
            }
          />
        </div>
        <div className="formItem">
          <label htmlFor="phoneNumberInput">Phone Number:</label>
          <input
            type="text"
            id="phoneNumberInput"
            placeholder="123 456-78910"
            value={personalInfo.phoneNumber}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, phoneNumber: e.target.value })
            }
          />
        </div>
        <div className="formItem">
          <label htmlFor="emailInput">Email:</label>
          <input
            type="text"
            id="emailInput"
            placeholder="example@mail.com"
            value={personalInfo.email}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, email: e.target.value })
            }
          />
        </div>
        <div className="formItem">
          <label htmlFor="locationInput">Location:</label>
          <input
            type="text"
            id="locationInput"
            placeholder="Location"
            value={personalInfo.location}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, location: e.target.value })
            }
          />
        </div>
      </div>
    </>
  );
};

export default HeaderInput;
