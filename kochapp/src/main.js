import React from 'react'
import LoginPage from "./views/loginpage"
import './main.css'
import {Redirect} from "react-router"
import {fakeAuth} from "./fakeAuth"
import {RouterPaths} from "./constants"
import {useSelector} from "react-redux"

function Main() {

    //Aktuell benoetigt fuer re-rendering, sollte durch useEffect und Token check ersetzt werden!!!
    const loginState = useSelector(state => state.loginState)

    return (
        <div className='main'>
            {fakeAuth.isAuthenticated
                ? <Redirect to={RouterPaths.APP}/>
                : <LoginPage/>
            }
        </div>
    )
}

export default Main
