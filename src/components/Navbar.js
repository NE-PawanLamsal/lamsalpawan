import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li>
          <Link to="/projects" className="navbar-link">Projects</Link>
        </li>
        <li>
          <Link to="/login" className="navbar-link">Login</Link>
        </li>
        <li>
          <Link to="/dashboard" className="navbar-link">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
