import React from 'react'

const kochmuetze = <>
    <div className="toque">
        <div className="toque-bottom"></div>
        <div className="toque-left"></div>
        <div className="toque-middle"></div>
        <div className="toque-right"></div>
    </div>
</>

function LoginPage(props) {
    return (
        <>
            <h1 style={{paddingTop: '15px'}}>KochApp</h1>
            {kochmuetze}
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    name='username'
                    placeholder='Benutzername'
                    value={props.data.username}
                    onChange={props.handleChange}
                    className='input'
                />
                <br/>
                <input
                    type="password"
                    name='password'
                    placeholder='Passwort'
                    value={props.password}
                    onChange={props.handleChange}
                    className='input'
                />
                <br/>
                <label className='keep-logged-in'>
                    <input
                        type="checkbox"
                        name="keepLoggedIn"
                        checked={props.keepLoggedIn}
                        onChange={props.handleChange}
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