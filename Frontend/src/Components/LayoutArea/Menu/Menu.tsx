import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<NavLink to="/home">Home</NavLink>
            <span> | </span>
			<NavLink to="/shops">Show all shops</NavLink>
            <span> | </span>
			<NavLink to="/add-shop">Add Shop</NavLink>
        </div>
    );
}

export default Menu;
