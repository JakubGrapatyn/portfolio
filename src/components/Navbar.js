import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1>Jakub Grapatyn</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Nowy blog</Link>
                
            </div>
        </nav>
        
    );
}
 
export default Navbar;