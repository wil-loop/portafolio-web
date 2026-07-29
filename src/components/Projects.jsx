import ProjectsCard from "./ProjectsCard";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Proyectos</h2>
      <div className="underline"></div>

      <ProjectsCard />
    </section>
  );
}
export default Projects;
