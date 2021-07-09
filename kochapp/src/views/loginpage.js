import React, {useState} from 'react'
import {kochmuetze} from "../kochmuetze";
import {fakeAuth} from "../fakeAuth";
import {store} from "../redux/store";
import {setPassword, setUsername} from "../redux/actions/actions"
import {useFormValidation} from "../custom-hooks/useFormValidation"
import {loginPageValidations} from "../validations/validations"
import {RouterPaths} from "../constants";
import {useHistory} from "react-router-dom";
import InputTextField from "../components/inputTextField";


const displayError = (error) => error && <div className='error'>{error}</div>
const borderColor = (error) => error && 'red'

function LoginPage() {
    const history = useHistory()
    const [keepLoggedIn, setKeepLoggedIn] = useState(false)

    const validation = useFormValidation({
        initialValues: {
            username: 'admin',
            password: 'admin123!'
        },
        validations: {...loginPageValidations}
    })

    function handleChangeKeepLogin({target}) {
        setKeepLoggedIn(target.checked)
    }

    function handleSubmit(event) {
        event.preventDefault()
        const {username, password} = validation.values
        fakeAuth.authenticate({username, password}, () => {

            //Passwort und Username speichern
            //TODO: Anstatt Credentials Tokens speichern!!!
            store.dispatch(setUsername(username))
            store.dispatch(setPassword(password))
        })
    }

    return (
        <div style={{paddingTop: '5px'}}>
            <h1>KochApp</h1>
            {kochmuetze}
            <form onSubmit={handleSubmit}>
                <InputTextField
                    name='username'
                    placeholder='Benutzername'
                    validation={validation}
                />
                <br/>
                <input
                    type="password"
                    name='password'
                    placeholder='Passwort'
                    {...validation.bindField('password')}
                    className='input'
                    style={{borderColor: borderColor(validation.errors.password)}}
                />
                {displayError(validation.errors.password)}
                <br/>
                <label className='keep-logged-in'>
                    <input
                        type="checkbox"
                        name="keepLoggedIn"
                        checked={keepLoggedIn}
                        onChange={handleChangeKeepLogin}
                        className='keep-logged-in-check'
                    />
                    <span className='keep-logged-in-label'>Angemeldet bleiben?</span>
                </label>
                <br/>
                <button className='login-button' disabled={!validation.isValid()}>Anmelden</button>
            </form>
            <button
                name='register'
                className='register-button'
                onClick={(e) => {
                    history.push(RouterPaths.REGISTER)
                }}
            >Konto erstellen
            </button>
        </div>
    )
}

export default LoginPage