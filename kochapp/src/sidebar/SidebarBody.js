import React from "react"
import {displayLogout} from "./sidebar-logout";
import {displayRoutes} from "./sidebar-routes";

function SidebarBody({routes}) {
    return (
        <>
            <ul style={{borderBottom: '1px solid #e0e0e0'}}>
                {displayRoutes(routes)}
            </ul>
            <ul>
                <li>{displayLogout}</li>
            </ul>
        </>
    )
}

export default SidebarBody