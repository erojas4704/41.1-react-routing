import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <NavLink exact to="/sushi">
                Sushi
            </NavLink>
            <NavLink exact to="/condoms">
                Condoms
            </NavLink>
            <NavLink exact to="/knives">
                Knives
            </NavLink>
            <NavLink exact to="/pregnancytest">
                Pregnancy Test
            </NavLink>
        </nav>
    );
}

export default NavBar;