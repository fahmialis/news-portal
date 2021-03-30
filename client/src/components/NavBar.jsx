import React, { Component } from 'react'


export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Home</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-md-auto gap-2">
              <li className="nav-item rounded">
                <a className="nav-link active" href="#" ><i className="bi bi-house-fill me-2"></i>User List</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
