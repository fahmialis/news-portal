import React, { Component } from 'react'


export default class NavBar extends Component {
  render() {
    return (
    <nav className="navbar navbar-light bg-light fixed-top">
      <a className="navbar-brand" href="#">Home</a>
      <a className="navbar-brand" href="#">Supporter list</a>
    </nav>
    )
  }
}
