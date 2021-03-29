import React from 'react'

class Card extends React.Component {
  render() {
    return (
      <div className="card" style={{width: 400, color: 'black', textAlign: 'justify'}}>
        <div className="card-body">
          <h5 className="card-title" style={{textAlign: 'center'}}>Name : </h5>
          <ul className="list-group" style={{fontSize : 15}}>
            <li className="list-group-item">Username : </li>
            <li className="list-group-item">email: </li>
            <li className="list-group-item">Phone : </li>
            <li className="list-group-item">Website : </li>
          </ul>
          
        </div>
      </div>
    )
  }
}

export default Card
