import ProjectItems from "./ProjectList";

const Projects = () => {
  return (
    <div className="projects">
      {ProjectItems.map((item, index) => {
        return (
          <div key={index} className="project">
            <h1>{item.title}</h1>
            <h2>{item.description}</h2>
            <div className="image-wrapper">
              <img alt="project" src={item?.imgURL}></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
