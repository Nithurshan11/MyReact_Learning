import './Footer.css';

function Footer() {

    return(
        <footer className="footer">

            <h2 className='footer-logo'>CineBook</h2>
            <ul className='footer-links'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>

            </ul>
        <p className='footer-copyright'>Copyright &copy; 2026 CineBook. All rights reserved.</p>
            </footer>
        );
    }
    
    export default Footer;