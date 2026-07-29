import "./ProjectsCard.css";

function ProjectsCard() {
  return (
    <div className="project-list">
      <article className="project-card">
        <h3>Portafolio Web</h3>
        <p>Proyecto personal realizado con React y CSS</p>
        <button>Ver más</button>
      </article>

      <article className="project-card">
        <h3>Proyecto 2</h3>
        <p>Descripción breve del segundo proyecto.</p>
        <button>Ver más</button>
      </article>

      <article className="project-card">
        <h3>Proyecto 2</h3>
        <p>Descripción breve del segundo proyecto.</p>
        <button>Ver más</button>
      </article>
    </div>
  );
}
export default ProjectsCard;
