import React from "react"
import {RouterKeys, RouterPaths} from "../constants"
import Main from "../main"
import {RenderRoutes} from "./routes"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import {kochmuetze} from "../kochmuetze"
import RegisterPage from "../views/registerpage";
import RouteMenue from "./routemenue";
import Logout from "../views/logout";


//Routes Config File
export const ROUTES_CONFIG = [
    {path: RouterPaths.LOGIN, key: RouterKeys.LOGIN, exact: true, component: Main},
    {path: RouterPaths.REGISTER, key: RouterKeys.REGISTER, exact: true, component: RegisterPage},
    {
        path: RouterPaths.APP,
        key: RouterKeys.APP,
        component: withSidebar, //Benoetigt fuer nested routing
        routes: [
            {
                path: RouterPaths.APP,
                key: RouterKeys.APP_ROOT,
                exact: true,
                isPrivat: true,
                component: () => <h2>Welcome to my App</h2>
            },
            {
                path: RouterPaths.APP_PAGE_1,
                key: RouterKeys.APP_PAGE_1,
                exact: true,
                isPrivat: true,
                component: () => <h2>App Page 1</h2>
            },
            {
                path: RouterPaths.APP_PAGE_2,
                key: RouterKeys.APP_PAGE_2,
                exact: true,
                isPrivat: true,
                component: () => <h2>App Page 2</h2>
            }
        ]
    },
    {path: RouterPaths.LOGOUT, key: RouterKeys.LOGOUT, exact: true, isPrivat: true, component: Logout},
]

//TODO: Refactoring
function withSidebar(props) {
    return <>
        <div className="dropdown">
            <button className='dropbtn'><FontAwesomeIcon icon={faBars} style={{fontSize: '20px'}}/></button>
            <div className="dropdown-content">
                <div className="dropdown-header">
                    {kochmuetze}
                    <h2>KochApp</h2>
                </div>
                {RouteMenue(props.routes)}
            </div>
        </div>
        <div style={{padding: '1px 16px'}}>{RenderRoutes(props)}</div>
    </>
}