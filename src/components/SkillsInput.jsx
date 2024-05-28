import { v4 as uuidv4 } from "uuid";

const SkillsInput = ({ skills, setSkills }) => {
  function handleAdd(e) {
    e.preventDefault();
    console.log(e);
    setSkills([...skills, { id: uuidv4(), skill: e.target[0].value }]);
    e.target[0].value = "";
  }

  function handleDelete(id) {
    setSkills((prevSkills) => prevSkills.filter((info) => info.id !== id));
  }
  return (
    <div id="skillsFormDiv">
      {skills.map(({ id, skill }) => (
        <div key={id} className="forms skillForms">
          <input type="text" value={skill} placeholder="Skill" />
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      ))}
      <form id="addSkillForm" onSubmit={(e) => handleAdd(e)}>
        <input type="text" placeholder="Add Skill" required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default SkillsInput;
