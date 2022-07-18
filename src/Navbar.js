import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import logo from "./images/logo.svg";

export default function Navbar() {
    const { toggleSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
    function displaySubmenu(e) {
        const page = e.target.name
        const tempBtn = e.target.getBoundingClientRect()
        const center = (tempBtn.left + tempBtn.right) / 2
        const bottom = tempBtn.bottom - 3
        openSubmenu(page, { center, bottom })
    }
    function handleSubmenu(e) {
        if (!e.target.classList.contains('link-btn')) closeSubmenu()
    }
    return (
        <nav className="nav" onMouseOver={handleSubmenu}>
            <div className="nav-center" >
                <div className="nav-header" onMouseOver={() => closeSubmenu()}>
                    <img className="nav-logo" src={logo} alt="Stripe" />
                    <button onClick={toggleSidebar} className="btn toggle-btn">
                        <FaBars />
                    </button>
                </div>
                <ul className="nav-links">
                    <li>
                        <button
                            name="products"
                            onMouseOver={displaySubmenu}
                            className="link-btn">products</button>
                    </li>
                    <li>
                        <button
                            name="developers"
                            onMouseOver={displaySubmenu}
                            className="link-btn">developers</button>
                    </li>
                    <li>
                        <button
                            name="company"
                            onMouseOver={displaySubmenu}
                            className="link-btn">company</button>
                    </li>
                </ul>
                <button className="btn signin-btn">Sign in</button>
            </div>
        </nav>
    );
}
