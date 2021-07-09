import React from "react"
import {NavLink} from "react-router-dom"
import {fakeAuth} from "../fakeAuth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

const routeKeyToName = Object.freeze({
    LOGIN: "Login Page",
    APP: 'App Index',
    APP_ROOT: 'App Index',
    APP_PAGE_1: 'App Page 1',
    APP_PAGE_2: 'App Page 2',
    LOGOUT: 'Abmelden'
})

//TODO: Refactoring
function RouteMenue(routes) {
    function displayRoute(route) {
        return (
            <li key={route.key}>
                <NavLink
                    exact
                    activeClassName="dropdown-link-selected"
                    className="dropdown-link"
                    to={route.path}>
                    {routeKeyToName[route.key]}
                </NavLink>
            </li>
        )
    }
    return (
        <>
            <ul style={{borderBottom: '1px solid #e0e0e0'}}>
                {routes.map(route => {
                    return <React.Fragment key={route.key}>
                        {displayRoute(route)}
                        {route.routes && RouteMenue(route.routes)}
                    </React.Fragment>
                })}
            </ul>
            <ul>
                <li>
                    <NavLink
                        exact
                        activeClassName="dropdown-link-selected"
                        className="dropdown-logout"
                        to="/logout"
                        onClick={() => fakeAuth.logOut(() => alert("Logout in progress!"))}
                    >
                        <button className='dropbtn' style={{color: '#1e3b70'}}>
                            <FontAwesomeIcon
                                icon={faTimes}
                                style={{fontSize: '15px', color: '#1e3b70'}}
                            />
                        </button>
                        Logout
                    </NavLink>
                </li>
            </ul>
        </>
    )
}

export default RouteMenue