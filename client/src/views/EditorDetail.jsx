import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader"


export default function EditorDetail() {
  const [users, setUsers] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    // console.log(id, 'ini id params')
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data,'fetch data')
        setUsers(data)
      })
      .catch(err => {
        console.log(err);
      })
      .finally(_ => {
      console.log(users, 'ini users detail per id');
      setLoading(false)
      }) 
  }, [])

  return (
    <div>
      <h1>tes</h1>
    </div>
)
}
