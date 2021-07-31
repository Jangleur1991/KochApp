import {NavLink} from "react-router-dom";
import {RouteKeyToName} from "../constants";

export const displayRoute = ({key, path}) => {
    return (
        <li key={key}>
            <NavLink
                exact
                activeClassName="dropdown-link-selected"
                className="dropdown-link"
                to={path}>
                {RouteKeyToName[key]}
            </NavLink>
        </li>
    )
}

