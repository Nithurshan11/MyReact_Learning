import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {

    return(
        <footer className="footer">

            <h2 className='footer-logo'>CineBook</h2>
            <ul className='footer-links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>

            </ul>
        <p className='footer-copyright'>Copyright &copy; 2026 CineBook. All rights reserved.</p>
            </footer>
        );
    }
    
    export default Footer;