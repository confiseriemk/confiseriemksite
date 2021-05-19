import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home'
import Login from '../Login'
import Signup from '../Signup'

export default function Main() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
            </Switch>
        </div>
    )
}