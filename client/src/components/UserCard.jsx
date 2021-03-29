import React from 'react'

class Card extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const {user} = this.props
    return (
      <tr>
        <th scope="row">{user.name}</th>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.website}</td>
      </tr>
    )
  }
}

export default Card
