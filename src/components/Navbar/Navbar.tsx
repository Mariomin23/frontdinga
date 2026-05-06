import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="navbar-logo">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            <img src="/logo.jpg" alt="Logo" className="logo-img" />
            <span className="logo-text"></span>
          </NavLink>
        </div>

        
        <div className={`nav-toggle ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

       
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={() => setIsOpen(false)}>Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/productos" className="nav-links" onClick={() => setIsOpen(false)}>Productos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" className="nav-links" onClick={() => setIsOpen(false)}>Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register" className="nav-register-btn" onClick={() => setIsOpen(false)}>Registro</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;