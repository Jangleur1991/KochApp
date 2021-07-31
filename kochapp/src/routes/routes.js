import React from "react"
import {Redirect, Route, Switch} from "react-router"
import ErrorPage from "../views/errorpage"
import {fakeAuth} from "../fakeAuth"
import {RouterPaths} from "../constants"
import Logout from "../views/logout";

//Rendert Routes aus routes-config
export function RenderRoutes({routes}) {
    return (
        <Switch>
            {routes.map(route => <RouteWithSubRoute key={route.key} {...route}/>)}
            <Route component={ErrorPage}/>
        </Switch>
    )
}

//Erzeugt ein Route mit potenziell mehreren SubRoutes
function RouteWithSubRoute(route) {
    return (route.isPrivat)
        ? <PrivatRoute
            path={route.path}
            exact={route.exact}
            routes={route.routes}
            component={route.component}
        />
        : <Route
            path={route.path}
            exact={route.exact}
            render={(props) => {
                console.log("Props von aktueller Route: ", props)
                return <route.component {...props} routes={route.routes}/>
            }}
        />
}

//Zugriff auf Component, nur nach Authentifizierung
function PrivatRoute({component: Component, routes, ...rest}) {
    return (
        <Route {...rest} render={(props) => {
            console.log("Props von aktueller Route: ", props)
            return fakeAuth.isAuthenticated
                ? (<Component {...rest} routes={routes}/>)
                : (<Redirect to={RouterPaths.LOGIN}/>)
        }}/>
    )
}



