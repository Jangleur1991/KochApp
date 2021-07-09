import React from "react"
import {useHistory} from "react-router";

function Logout() {
    const history = useHistory()
    return (
        <div style={{paddingTop: '15px'}}>
            <h2>Logout war erfolgreich.</h2>
            <button className='register-button' onClick={() => history.push("/")}>Zurück zum Login</button>
        </div>
    )
}

export default Logout