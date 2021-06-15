import React from "react"
import {Route, Switch} from "react-router"
import ErrorPage from "../views/errorpage"

//Rendert Routes aus routes-config
export function RenderRoutes({routes}) {
    console.log("Aktuelle Routes: ", routes)
    return (
        <Switch>
            {routes.map(route => <RouteWithSubRoute key={route.key} {...route}/>)}
            <Route component={ErrorPage}/>
        </Switch>
    )
}

//Erzeugt ein Route mit potenziell mehreren SubRoutes
function RouteWithSubRoute(route) {
    return <Route
        path={route.path}
        exact={route.exact}
        render={(props) => {
            console.log("Props von aktueller Route: ", props)
            return <route.component {...props} routes={route.routes}/>
        }}
    />
}



