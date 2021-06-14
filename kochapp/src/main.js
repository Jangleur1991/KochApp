import React, {Component} from 'react'
import LoginPage from "./views/loginpage"
import './main.css'

//TODO: Refactoring mit Hooks
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div className='main'>
                <LoginPage />
            </div>
        )
    }
}

export default Main
