import React from "react"
import {useHistory} from "react-router-dom";

function RegisterPage() {
    const history = useHistory()
    return (
        <div style={{paddingTop: '15px'}}>
            <div class="register-container">
                <h2 style={{float: 'left'}}>Jetzt registrieren</h2>
                <form style={{clear: 'left'}}>
                    <div class='row'>
                        <div className="col-25">
                            <label htmlFor="username" className="register-label">Benutzername</label>
                        </div>
                        <div className="col-75">
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Benutzername"
                                className="register-input"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="passwort" className="register-label">Passwort</label>
                        </div>
                        <div className="col-75">
                            <input
                                type="password"
                                id="passwort"
                                name="passwort"
                                placeholder="Passwort"
                                className="register-input"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <input
                            type="submit"
                            value="Registrieren"
                            className='register-submit'
                        />
                    </div>
                </form>
                <button
                    className='register-submit'
                    onClick={(e) => {
                        history.push('/')
                    }}>Abbrechen
                </button>
            </div>
        </div>
    )
}

export default RegisterPage