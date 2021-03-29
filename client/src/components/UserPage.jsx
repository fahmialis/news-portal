import React, { Component } from 'react'
import UserCard from './UserCard'

export default class UserPage extends Component {
  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody>
            <UserCard></UserCard>
            <UserCard></UserCard>
            <UserCard></UserCard>
            <UserCard></UserCard>
            <UserCard></UserCard>
            <UserCard></UserCard>
          </tbody>
        </table>
      </div>
    )
  }
}
