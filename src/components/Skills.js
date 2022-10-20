import SkillsItems from "./SkillsList";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      {SkillsItems.map((item, index) => {
        return (
          <div key={index}>
            <img alt="skills" src={item?.imgURL}></img>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
