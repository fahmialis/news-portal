
import React, { Component } from 'react'
import UserCard from '../components/UserCard'

export default class UserPage extends Component {
  constructor() {
    super()

    this.state = {
      users : []
    }
  }

  getDataFromAPI = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      let newData = this.state.users.concat(data)
      this.setState({
        ...this.state,
        users: newData
      }) 
    })
    .catch(err => {
      console.log(err);
    })
    .finally(_ => {
    console.log(this.state.users, 'ini users finallyy');
    }) 
  }

  componentDidMount() {
    this.getDataFromAPI()
  }

  showUser=() =>{
    console.log(this.state.users, 'ini users');
  }

  render() {
    const {users} = this.state
    return (
      <div>
        {/* <button onClick={this.showUser}>click</button> */}
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
            {
              users.map(user =>{
                return <UserCard user={user} key={user.id}></UserCard>
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
