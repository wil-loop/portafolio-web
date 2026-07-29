import "./About.css";
import imgaboutme from "../assets/aboutme.svg";
import { Code, Palette, Lightbulb } from "lucide-react";

function About() {
  return (
    <section className="about-me" id="about-me">
      <h1>Sobre mi</h1>
      <div className="underline"></div>
      <div className="about-content">
        <img src={imgaboutme} alt="about-me" className="about-img" />

        <div className="about-info">
          <p>
            Soy un estudiante de la carrera Licenciatura en Sistemas de
            Información de la UNNE. Me encanta programar soluciones y diseñar
            páginas web.{" "}
          </p>

          <div className="skills">
            <div className="skill">
              <div className="code-container">
                <Code className="Code" />
              </div>
              <span>Desarrollo web</span>
            </div>

            <div className="skill">
              <div className="palette-container">
                <Palette />
              </div>
              <span>Diseño UI</span>
            </div>

            <div className="skill">
              <div className="lightbulb-container">
                <Lightbulb />
              </div>
              <span>Aprendizaje</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
