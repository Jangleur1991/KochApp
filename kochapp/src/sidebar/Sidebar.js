import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import React from "react"
import {RenderRoutes} from "../routes/routes"
import SidebarContent from "./SidebarContent"

function Sidebar(props) {
    return <>
        <div className="dropdown">
            <button className='dropbtn'><FontAwesomeIcon icon={faBars} style={{fontSize: '20px'}}/></button>
            <SidebarContent routes={props.routes} />
        </div>
        {/*Benoetigt fuer nested routing*/}
        <div style={{padding: '1px 16px'}}>{RenderRoutes(props)}</div>
    </>
}

export default Sidebar