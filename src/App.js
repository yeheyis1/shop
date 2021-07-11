import React from 'react'
import {BrowserRouter, Route, Link } from "react-router-dom";

import Home from '../src/Home/Home';
import About from '../src/About/About'
import Contact from '../src/Contact/Contact'
import Header from '../src/Header/Header'
import Body from '../src/body/body'
import Footer from '../src/Footer/Footer'
import Login from '../src/Home/Login/Login'
import signup from '../src/Home/signup/signup'
import Kids from '../src/Home/kids/kids'
import man from '../src/man/man'
import women from '../src/women/women'



class App extends  React.Component{
    render(){
        return(

             <BrowserRouter>
             <Route exact path="/" component={Home} />
             <Route exact path="/about" component={About} />
             <Route exact path="/contact" component={Contact} />
             <Route exact path="/Login" component={Login} />
             <Route exact path="/signup" component={signup} />
             <Route exact path="/kids" component={kids} />
             <Route exact path="/man" component={man} />
             <Route exact path="/women" component={women} />
             
             </BrowserRouter>
        )
    }
}



export default App;


