import React from "react"
import {RouterKeys, RouterPaths} from "../constants"
import Main from "../main"
import {RenderRoutes} from "./routes";


//Routes Config File
export const ROUTES_CONFIG = [
    {path: RouterPaths.LOGIN, key: RouterKeys.LOGIN, exact: true, component: Main},
    {
        path: RouterPaths.APP,
        key: RouterKeys.APP,
        component: RenderRoutes, //Benoetigt fuer nested routing
        routes: [
            {
                path: RouterPaths.APP,
                key: RouterKeys.APP_ROOT,
                exact: true,
                component: () => <h2>Welcome to my App</h2>
            },
            {
                path: RouterPaths.APP_PAGE_1,
                key: RouterKeys.APP_PAGE_1,
                exact: true,
                component: () => <h2>App Page 1</h2>
            },
            {
                path: RouterPaths.APP_PAGE_2,
                key: RouterKeys.APP_PAGE_2,
                exact: true,
                component: () => <h2>App Page 2</h2>
            }
        ]
    }
]