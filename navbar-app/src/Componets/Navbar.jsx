import {useState} from "react";
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
        <nav className="navbar">
            <div className="logo">
                Logo
            </div>
            <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Pricing</li>
            </ul>
            <button className="create-btn">Create Account</button>
                <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    ☰
                </div>
            </nav>

            <div className={isMenuOpen ? "mobile-menu-active" : "mobile-menu"}>
                <div
                    className="close-btn"
                    onClick={() => setIsMenuOpen(false)} >
                    ✕
                </div>
                <div className="mobile-logo">Logo</div>
                <ul className="mobile-links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Pricing</li>
                </ul>

                <button className="mobile-btn">Create Account</button>
            </div>
        </>
    )


}

export default Navbar;