import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  return (
    <nav className = "navbar">
      <div className = "nav-links">

      <Link to="/">Home</Link> | {""}
      <Link to="/login">Login</Link> | {""}
      <Link to= "/register">Registration</Link> | {""}
      <Link to="/book">Book</Link> | {""}
      <Link to="/dashboard">Dashboard</Link> | {""}
      <Link to="/admin">Admin</Link> | {""}
      <Link to="/log">Log</Link> 

      </div>
    </nav>
  );
}

export default Navbar;
