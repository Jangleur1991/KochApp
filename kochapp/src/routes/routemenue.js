import React from "react"
import {NavLink} from "react-router-dom"


const routeKeyToName = Object.freeze({
    LOGIN: "Login Page",
    APP: 'App Index',
    APP_ROOT: 'App Index',
    APP_PAGE_1: 'App Page 1',
    APP_PAGE_2: 'App Page 2'
})

function routeMenue(routes) {

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
        <ul>
            {routes.map(route => {
                return <React.Fragment key={route.key}>
                    {displayRoute(route)}
                    {route.routes && routeMenue(route.routes)}
                </React.Fragment>
            })}
        </ul>
    )
}

export default routeMenue