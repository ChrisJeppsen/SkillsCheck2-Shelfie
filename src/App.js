import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import Product from './Components/Product/Product'
import Dashboard from './Components/Dashboard/Dashboard'


function App() {
  return (
    <HashRouter> 
      <div className="App">
        <Header/>
        <Dashboard/>
        {/* <Form/> */}
        {/* <Product/> */}
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
