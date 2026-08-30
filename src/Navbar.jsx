import { Link } from 'react-router-dom'

function Navbar(){
    return (
        <nav className="navbar">
            <h1 className="navTitle">Portfolio</h1>
                <div className="navList">
                        <Link to="/" className="navLink glass">Home</Link>
                        <Link to="/About" className="navLink glass">About</Link>
                        <Link to="/Projects" className="navLink glass">Projects</Link>
                </div>
        </nav>
    )
}

export default Navbar