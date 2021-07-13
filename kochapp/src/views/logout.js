import React from "react"
import {useHistory} from "react-router";
import Button from "../components/Button";
import {fakeAuth} from "../fakeAuth";

function Logout() {
    const history = useHistory()
    return (
        <div style={{paddingTop: '15px'}}>
            <h2>Logout war erfolgreich</h2>
            <Button
                name='backtologin'
                text='Zurück zum Login'
                onClick={() => {
                    //TODO: Aktuell nur so moeglich, aber sonst sollte der Logout frueher passieren!
                    fakeAuth.logOut()
                    history.push("/")
                }}
            />
        </div>
    )
}

export default Logout