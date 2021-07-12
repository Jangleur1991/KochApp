import React from "react"
import {useHistory} from "react-router";
import Button from "../components/Button";

function Logout() {
    const history = useHistory()
    return (
        <div style={{paddingTop: '15px'}}>
            <h2>Logout war erfolgreich</h2>
            <Button
                name='backtologin'
                text='Zurück zum Login'
                onClick={() => history.push("/")}
            />
        </div>
    )
}

export default Logout