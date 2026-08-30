function Navbar(){
    return (
        <nav className="navbar">
            <h1 className="navTitle">Portfolio</h1>
                <div className="navList">
                        <a href="/" className="navLink glass">Home</a>
                        <a href="/About" className="navLink glass">About</a>
                        <a href="/Projects" className="navLink glass">Projects</a>
                </div>
        </nav>
    )
}

export default Navbar