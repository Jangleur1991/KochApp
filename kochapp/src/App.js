import React from 'react'
import './main.css'
import {RenderRoutes} from "./routes/routes"
import {ROUTES_CONFIG} from "./routes/routes-config"

function App() {
    return (
        <div className='main'>
            <RenderRoutes routes={ROUTES_CONFIG}/>
        </div>
    )
}

export default App