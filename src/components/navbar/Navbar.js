import React from "react";
import "./Navbar.css";

const Navbar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="logo">
        <img
          src="https://i.pinimg.com/564x/96/e3/d3/96e3d30ce7f4c75876d98cd779731605.jpg"
          alt="logo"
          onClick={toTheTop}
        />
      </div>
      <div className="items">
        <ul className="list-items">
          <li>
            <a href="#About">Acerca</a>
          </li>
          <li>
            <a href="#Proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#Form">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
