import logo from '../logo.svg';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (  
        <nav className="navbar">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1>Jakub Grapatyn</h1>
            <div className="links">
                <Link to="/">Strona główna</Link>
                <Link to="/dane">O mnie</Link>
                <Link to="/projekty">Projekty</Link>
                <Link to="/kontakt">Kontakt</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;

 
 