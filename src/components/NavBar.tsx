import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="logo">CineBook</h1>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;