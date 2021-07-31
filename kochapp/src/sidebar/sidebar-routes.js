import React from "react"
import {displayRoute} from "./sidebar-route";

export const displayRoutes = (routes) =>
    (routes.map(route => {
        return <React.Fragment key={route.key}>
            {displayRoute(route)}
            {route.routes && displayRoutes(route.routes)}
        </React.Fragment>
    }))
