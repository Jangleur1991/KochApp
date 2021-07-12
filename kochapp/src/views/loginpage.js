import React, {useState} from 'react'
import {kochmuetze} from "../kochmuetze";
import {fakeAuth} from "../fakeAuth";
import {store} from "../redux/store";
import {setPassword, setUsername} from "../redux/actions/actions"
import {useFormValidation} from "../custom-hooks/useFormValidation"
import {loginPageValidations} from "../validations/validations"
import {RouterPaths} from "../constants";
import {useHistory} from "react-router-dom";
import InputField from "../components/InputField";
import CheckBox from "../components/CheckBox";
import Button from "../components/Button";

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
                <InputField
                    name='username'
                    placeholder='Benutzername'
                    validation={validation}
                />
                <br/>
                <InputField
                    type="password"
                    name="password"
                    placeholder='Passwort'
                    validation={validation}
                />
                <br/>
                <CheckBox
                    name="keepLoggedIn"
                    checked={keepLoggedIn}
                    onChange={handleChangeKeepLogin}
                    labelText='Angenmeldet bleiben?'
                />
                <br/>
                <Button
                    name='loginButton'
                    text='Anmelden'
                    className='login-button'
                    disabled={!validation.isValid()}
                />
            </form>
            <Button
                name='register'
                text='Konto erstellen'
                onClick={() => history.push(RouterPaths.REGISTER)}
            />
        </div>
    )
}

export default LoginPage