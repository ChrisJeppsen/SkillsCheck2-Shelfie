import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import Product from './Components/Product/Product'
import Dashboard from './Components/Dashboard/Dashboard'

export default (
    <Switch>
        <Route exact path='/' component={Dashboard}></Route>
        <Route path='/form' component={Form}></Route>
        <Route path='/form/:addform' component={Form}></Route>
        <Route path='/product' component={Product}></Route>
        

    </Switch>
)