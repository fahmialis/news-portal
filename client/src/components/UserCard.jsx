import {Button} from 'react-bootstrap'
import React, {useState, useEffect} from 'react'

function Card (props) {
    const [user, setUser] = useState(props)
    // console.log(user, 'ini user');
    useEffect(() => {
      // console.log(props, 'ini props')
      // console.log(user,'ini user')
    },[])
    return (
      <tr>
        <th scope="row">{user.user.name}</th>
        <td>{user.user.username}</td>
        <td>{user.user.email}</td>
        <td>{user.user.phone}</td>
        <td>{user.user.website}</td>
        <td><Button>Detail</Button></td>
      </tr>
    )
}


export default Card
