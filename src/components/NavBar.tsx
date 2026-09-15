import './NavBar.css';

type NavBarProps = {
  onNavigate: (page:string) => void;
};

function NavBar(props: NavBarProps) {
  return (
    <nav className="navbar">
      <h1 className="logo">CineBook</h1>
      <ul className="nav-links">
        <li><a href="#home" 
        onClick={(e) =>{
          e.preventDefault();
          props.onNavigate('home');
        }}
        >Home</a></li>

        <li><a href="#about"
        onClick={(e)=>{
          e.preventDefault();
          props.onNavigate('about');
        }}
        >About</a></li>
        <li><a href="#contact"
        onClick={(e)=>{
          e.preventDefault();
          props.onNavigate('contact');
        }}
        >Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;