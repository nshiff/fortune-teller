import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./ResponsiveNavbar.css";
import { Link } from "react-router";

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Fortune Teller
        </Link>

        <button
          className="menu-button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`navbar-nav ${isOpen ? "active" : ""}`}>
          <Link to="/fortune-cookie" onClick={toggleMenu} className="nav-link">
            Fortune Cookie
          </Link>
          <Link to="/crystal-ball" onClick={toggleMenu} className="nav-link">
            Crystal Ball
          </Link>
          <Link to="/tarot-cards" onClick={toggleMenu} className="nav-link">
            Tarot Cards
          </Link>
        </nav>
      </div>
    </header>
  );
}
