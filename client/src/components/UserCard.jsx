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
    const [editor, setUser] = useState(props)
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
        <th scope="row">{editor.editor.name}</th>
        <td>{editor.editor.username}</td>
        <td>{editor.editor.website}</td>
        {
        <td><Button onClick={() =>{
          toDetail(editor.editor.id)
        }}>Detail</Button></td>
        }
      </tr>
      </Router>
    )
}


export default Card
