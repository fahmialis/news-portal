import React from 'react'
import {Button} from 'react-bootstrap'

class Card extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const {user} = this.props
    // console.log(user, 'ini user');
    return (
      <tr>
        <th scope="row">{user.name}</th>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.website}</td>
        <td><Button>view detail</Button></td>
      </tr>
    )
  }
}

export default Card
