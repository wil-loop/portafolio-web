import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h3>William</h3>
      <ul>
        <li>
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href="#about-me">Sobre mi</a>
        </li>
        <li>
          <a href="#projects">Proyectos</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
