import React from "react"
import {RouterKeys, RouterPaths} from "../constants"
import Main from "../main"
import RegisterPage from "../views/registerpage";
import Logout from "../views/logout";
import Sidebar from "../sidebar/Sidebar";


//Routes Config File
export const ROUTES_CONFIG = [
    {path: RouterPaths.LOGIN, key: RouterKeys.LOGIN, exact: true, component: Main},
    {path: RouterPaths.REGISTER, key: RouterKeys.REGISTER, exact: true, component: RegisterPage},
    {
        path: RouterPaths.APP,
        key: RouterKeys.APP,
        component: Sidebar,
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
    //TODO: Sollte nicht privat sein, aber auch nicht einfach zu erreichen.
    // Wie umsetzen?
    {path: RouterPaths.LOGOUT, key: RouterKeys.LOGOUT, exact: true, isPrivat: true, component: Logout},
]

