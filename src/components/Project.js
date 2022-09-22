import ProjectItems from "./ProjectList";

const Projects = () => {
    return (
        <div className="projects">

            {ProjectItems.map((item, index) => {
                return (
                    <div key={index}>
                        <h1>{item.title}</h1>
                        <img alt='project' src={item?.imgURL}></img>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Projects;