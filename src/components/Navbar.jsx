import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/doctors">Doctors</Link> | 
      <Link to="/book">Book</Link> | 
      <Link to="/dashboard">Dashboard</Link> | 
      <Link to="/admin">Admin</Link> | 
      <Link to="/logs">Logs</Link>
    </nav>
  );
}

export default Navbar;
