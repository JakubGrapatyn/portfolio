import logo from '../logo.svg';
const Navbar = () => {
    return (  
        <nav className="navbar">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1>Mikołaj Frankiewicz</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">Nowy blog</a>
            </div>
        </nav>
        
    );
}
 
export default Navbar;