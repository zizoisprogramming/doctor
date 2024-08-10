import '../CSS/Navbar.css';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="logo">Dr.Samer's Clinic</div>
            <div className="nav-links">
                <a>Home</a>
                <a>About</a>
                <a>Make an appointment</a>
                <a>Profile</a>
            </div>
        </nav>
    );
}
 
export default Navbar;