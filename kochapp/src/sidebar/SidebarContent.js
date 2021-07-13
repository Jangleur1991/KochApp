import React from "react"
import SidebarHeader from "./SidebarHeader";
import SidebarBody from "./SidebarBody";

function SidebarContent({routes}) {
    return (
        <div className="dropdown-content">
            <SidebarHeader />
            <SidebarBody routes={routes}/>
        </div>
    )
}

export default SidebarContent