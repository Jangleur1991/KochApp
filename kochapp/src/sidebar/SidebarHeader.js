import React from "react"
import {kochmuetze} from "../kochmuetze";

function SidebarHeader() {
    return (
        <div className="dropdown-header">
            {kochmuetze}
            <h2>KochApp</h2>
        </div>
    )
}

export default SidebarHeader