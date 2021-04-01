import React, {useState, useEffect} from 'react'
import UserCard from '../components/UserCard'
import {useSelector, useDispatch} from 'react-redux'
import { addEditorsAsync } from '../store/actions/editors'

function UserPage () {
  const editors = useSelector(state => state.editors.data)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addEditorsAsync())
  }, [])

  return (
    <div>
      <br/>
      <div className="jumbotron" style={{background : 'none', marginBottom: 0}}>
        <h1 className="display-4">About Us</h1>
        <h2 className="lead">We are a small team, click detail to know more about our editor</h2> 
      </div>
      <div className="container justify-content-center" >
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
            editors.map(editor =>{
              return <UserCard editor={editor} key={editor.id}></UserCard>
            })
          }
        </tbody>
      </table>
      </div>
    </div>
  )

}

export default UserPage
