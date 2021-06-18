import React, {Component} from 'react'
import LoginPage from "./views/loginpage"
import './main.css'
import {Redirect} from "react-router"
import {store} from "./redux/store"
import {setPassword, setUsername} from "./redux/actions/actions"
import {fakeAuth} from "./fakeAuth"
import {RouterPaths} from "./constants"

//TODO: Refactoring mit Hooks
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            keepLoggedIn: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange({target}) {
        const {name, value, type, checked} = target
        this.setState((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    handleSubmit(event) {
        event.preventDefault()
        const {username, password} = this.state
        fakeAuth.authenticate({username, password}, () => {
            //Lokalen State zurücksetzen
            this.setState({
                username: '',
                password: '',
                keepLoggedIn: false
            })
            //Passwort und Username speichern
            store.dispatch(setUsername(username))
            store.dispatch(setPassword(password))
        })
    }

    render() {
        return (
            <div className='main'>
                {fakeAuth.isAuthenticated
                    ? <Redirect to={RouterPaths.APP} />
                    : <LoginPage
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        data={this.state}
                    />
                }
            </div>
        )
    }
}

export default Main
