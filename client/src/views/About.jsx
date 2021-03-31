import React, {useState, useEffect} from 'react'
import UserCard from '../components/UserCard'

function UserPage () {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        // console.log(data,'fetch data')
        setUsers(data)
      })
      .catch(err => {
        console.log(err);
      })
      .finally(_ => {
      // console.log(users, 'ini users finallyy');
      }) 
  }, [])


  return (
    <div>
      <div className="jumbotron" style={{background : 'none', marginBottom: 0}}>
        <h1 className="display-4">About Us</h1>
        <h2 className="lead">Describe about us</h2> 
      </div>
      <table className="table table-hover table-sm" >
        <thead className="thead-light">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Website</th>
            <th scope="col">Action</th>
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

export default UserPage
