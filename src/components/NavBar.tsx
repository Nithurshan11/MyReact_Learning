import {Link} from 'react-router-dom';
import './NavBar.css';


function NavBar() {
  return(
    <nav className="navbar">
      <h1 className="logo">CineBook</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;