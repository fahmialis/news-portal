import {Button} from 'react-bootstrap'
import React, {useState, useEffect} from 'react'
import EditorDetail from '../views/EditorDetail'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory
} from "react-router-dom"

function Card (props) {
    const [user, setUser] = useState(props)
    const history = useHistory()
    // console.log(user, 'ini user');
    useEffect(() => {
      // console.log(props, 'ini props')
      // console.log(user.user.id,'ini user')
    },[])

    const toDetail = (id) => {
      console.log(id, 'ini id user')
      history.push(`editor/${id}`)
    }

    return (
      <Router>

      <tr>
        <th scope="row">{user.user.name}</th>
        <td>{user.user.username}</td>
        <td>{user.user.website}</td>
        {
        <td><Button onClick={() =>{
          toDetail(user.user.id)
        }}>Detail</Button></td>
        }
      </tr>
      </Router>
    )
}


export default Card
