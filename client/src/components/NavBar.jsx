import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import About from '../views/About.jsx'
import Home from '../views/Home'


export default class NavBar extends Component {
  render() {
    return (
      <Router>
      <nav className="navbar navbar-light bg-light fixed-top">
        <Link to="/" className="navbar-brand">Home</Link>
        <Link to="/about" className="navbar-brand">About Us</Link>
      </nav>
      <Switch>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
      </Router>
    )
  }
}
