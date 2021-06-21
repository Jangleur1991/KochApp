import React, {useState} from 'react'
import {kochmuetze} from "../kochmuetze";
import {fakeAuth} from "../fakeAuth";
import {store} from "../redux/store";
import {setPassword, setUsername} from "../redux/actions/actions";

const initCredentials = {
    username: '',
    password: ''
}

function LoginPage(props) {

    const [credentials, setCredentials] = useState(initCredentials)
    const [keepLoggedIn, setKeepLoggedIn] = useState(false)

    function handleChange({target}) {
        const {name, value, type, checked} = target
        type === 'checkbox'
            ? setKeepLoggedIn(checked)
            : setCredentials(prevCred => ({...prevCred, [name]: value}))
    }

    function handleSubmit(event) {
        event.preventDefault()
        const {username, password} = credentials
        fakeAuth.authenticate({username, password}, () => {

            //Lokalen State zurücksetzen
            setCredentials(initCredentials)
            setKeepLoggedIn(false)

            //Passwort und Username speichern
            //TODO: Anstatt Credentials Tokens speichern!!!
            store.dispatch(setUsername(username))
            store.dispatch(setPassword(password))
        })
    }

    return (
        <>
            <h1 style={{paddingTop: '15px'}}>KochApp</h1>
            {kochmuetze}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='username'
                    placeholder='Benutzername'
                    value={credentials.username}
                    onChange={handleChange}
                    className='input'
                />
                <br/>
                <input
                    type="password"
                    name='password'
                    placeholder='Passwort'
                    value={credentials.password}
                    onChange={handleChange}
                    className='input'
                />
                <br/>
                <label className='keep-logged-in'>
                    <input
                        type="checkbox"
                        name="keepLoggedIn"
                        checked={keepLoggedIn}
                        onChange={handleChange}
                        className='keep-logged-in-check'
                    />
                    <span className='keep-logged-in-label'>Angemeldet bleiben?</span>
                </label>
                <br/>
                <button className='submit-button'>Anmelden</button>
            </form>
        </>
    )
}

export default LoginPage