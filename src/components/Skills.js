import SkillsItems from "./SkillsList";

const Skills = () => {
  return (
    <div>
      <div className="skills">
        {/* <h1 className="skills-header">Skills</h1> */}
        {SkillsItems.map((item, index) => {
          return (
            <div key={index}>
              <img alt="skills" src={item?.imgURL}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
