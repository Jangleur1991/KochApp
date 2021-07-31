import React from "react"
import {useHistory} from "react-router-dom";
import {useFormValidation} from "../custom-hooks/useFormValidation";
import {registerPageValidations} from "../validations/validations";
import InputField from "../components/InputField";
import Button from "../components/Button";

function RegisterPage() {
    const history = useHistory()

    const validation = useFormValidation({
        validations: {...registerPageValidations}
    })

    return (
        <div style={{paddingTop: '15px'}}>
            <div className="register-container">
                <h2 style={{float: 'left'}}>Jetzt registrieren</h2>
                <form style={{clear: 'left'}}>
                    <div className='row'>
                        <div className="col-25">
                            <label htmlFor="username" className="register-label">Benutzername</label>
                        </div>
                        <div className="col-75">
                            <InputField
                                name='username'
                                placeholder='Benutzername'
                                validation={validation}
                                className="register-input"
                                classNameError="error-register"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="passwort" className="register-label">Passwort</label>
                        </div>
                        <div className="col-75">
                            <InputField
                                type="password"
                                id="passwort"
                                name="passwort"
                                placeholder="Passwort"
                                className="register-input"
                                classNameError="error-register"
                                validation={validation}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <Button
                            name='register'
                            text='Registrieren'
                            className='register-submit'
                            disabled={!validation.isValid()}
                        />
                    </div>
                </form>
                <Button
                    name='abbrechen'
                    text='Abbrechen'
                    className='register-submit'
                    onClick={() => history.push('/')}
                />
            </div>
        </div>
    )
}

export default RegisterPage