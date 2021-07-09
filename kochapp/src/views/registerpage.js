import React from "react"
import {useHistory} from "react-router-dom";
import {useFormValidation} from "../custom-hooks/useFormValidation";
import {registerPageValidations} from "../validations/validations";
import InputTextField from "../components/inputTextField";

const displayError = (error) => error && <div className='error' style={{marginTop: '5px'}}>{error}</div>
const borderColor = (error) => error && 'red'

function RegisterPage() {
    const history = useHistory()

    const validation = useFormValidation({
        validations: {...registerPageValidations}
    })

    const {values, errors, bindField, isValid} = validation

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
                            <InputTextField
                                name='username'
                                placeholder='Benutzername'
                                validation={validation}
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
                                {...bindField('passwort')}
                                style={{borderColor: borderColor(errors.passwort)}}
                            />
                            {displayError(errors.passwort)}
                        </div>
                    </div>
                    <div className="row">
                        <input
                            type="submit"
                            value="Registrieren"
                            className='register-submit'
                            disabled={!isValid()}
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