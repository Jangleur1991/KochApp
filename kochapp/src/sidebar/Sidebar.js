import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import React from "react"
import {RenderRoutes} from "../routes/routes"
import SidebarContent from "./SidebarContent"

function Sidebar({routes}) {
    return <>
        <div className="dropdown">
            <button className='dropbtn'><FontAwesomeIcon icon={faBars} style={{fontSize: '20px'}}/></button>
            <SidebarContent routes={routes} />
        </div>
        <div style={{padding: '1px 16px'}}>
            {/*Benoetigt fuer nested routing*/}
            <RenderRoutes routes={routes} />
        </div>
    </>
}

export default Sidebar