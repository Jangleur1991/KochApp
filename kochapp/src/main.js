import React, {Component} from 'react'
import LoginPage from "./views/loginpage"
import './main.css'
import {Redirect} from "react-router";

//TODO: Refactoring mit Hooks
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            keepLoggedIn: false,
            isAuthenticated: false
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
        if (username && password) {
            this.setState(prevState => ({...prevState, isAuthenticated: true}))
        }
    }

    render() {
        return (
            <div className='main'>
                {this.state.isAuthenticated
                    ? <Redirect to='/app'/>
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
