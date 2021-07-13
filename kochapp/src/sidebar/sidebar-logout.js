import React from "react"
import {RouterPaths} from "../constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

export const displayLogout =
    <NavLink
        exact
        activeClassName="dropdown-link-selected"
        className="dropdown-logout"
        to={RouterPaths.LOGOUT}
    >
        <button className='dropbtn' style={{color: '#1e3b70'}}>
            <FontAwesomeIcon
                icon={faTimes}
                style={{fontSize: '15px', color: '#1e3b70'}}
            />
        </button>
        Logout
    </NavLink>