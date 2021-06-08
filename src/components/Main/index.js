import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home'
import Login from '../Login'
import Signup from '../Signup'
import Cart from '../Cart'
import FinishBuy from '../FinishBuy'

export default function Main() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/cart" component={Cart} />
                <Route path="/finish" component={FinishBuy}/>
            </Switch>
        </div>
    )
}