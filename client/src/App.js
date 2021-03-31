import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './views/About.jsx'
import Home from './views/Home.jsx'
import Editor from './views/EditorDetail.jsx'
import Navbar from './components/Navbar'
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App () {
  return(
    <Router>
    <div className="App">
    <header className="App-header">
      {/* <Navbar></Navbar>   */}
      <nav className="navbar navbar-light bg-light fixed-top">
        <Link to="/" className="navbar-brand">Home</Link>
        <Link to="/about" className="navbar-brand">About Us</Link>
      </nav>
    </header>
    <div className="body">
      <Switch>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/editor/:id">
          <Editor></Editor>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </div>
  </div>
    </Router>
  )
}

export default App;
