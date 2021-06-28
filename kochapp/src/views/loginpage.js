import React, {useState} from 'react'
import {kochmuetze} from "../kochmuetze";
import {fakeAuth} from "../fakeAuth";
import {store} from "../redux/store";
import {setPassword, setUsername} from "../redux/actions/actions";
import {useFormValidation} from "../custom-hooks/useFormValidation";
import {validations} from "../validations/validations";


const displayError = (error) => error && <div className='error'>{error}</div>
const borderColor = (error) => error && 'red'

function LoginPage(props) {

    const [keepLoggedIn, setKeepLoggedIn] = useState(false)
    const {values, errors, bindField} = useFormValidation({validations: {...validations}})

    function handleChangeKeepLogin({target}) {
        setKeepLoggedIn(target.checked)
    }

    function handleSubmit(event) {
        event.preventDefault()
        const {username, password} = values
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
                <input
                    type="text"
                    name='username'
                    placeholder='Benutzername'
                    {...bindField('username')}
                    className='input'
                    style={{borderColor: borderColor(errors.username)}}
                />
                {displayError(errors.username)}
                <br/>
                <input
                    type="password"
                    name='password'
                    placeholder='Passwort'
                    {...bindField('password')}
                    className='input'
                    style={{borderColor: borderColor(errors.password)}}
                />
                {displayError(errors.password)}
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
                <button className='submit-button'>Anmelden</button>
            </form>
        </div>
    )
}

export default LoginPage