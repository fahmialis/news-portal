import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader"


export default function EditorDetail() {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    // console.log(id, 'ini id params')
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data,'fetch data')
        setUser(data)
      })
      .catch(err => {
        console.log(err);
      })
      .finally(_ => {
      // console.log(user, 'ini users detail per id');
      setLoading(false)
      }) 
  }, [])

  return (
    <div className="mt-5">
    {
      loading ? <ClipLoader/> :
      <div className="row py-5 px-4">
        <div className="col-md-5 mx-auto">
            {/* <!-- Profile widget --> */}
            <div className="bg-white shadow rounded overflow-hidden">
                <div className="px-4 pt-0 pb-4 cover" style={{backgroundColor: 'black'}}>
                    <div className="media align-items-end profile-head">
                        <div className="profile mr-3"><img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="..." width="130" className="rounded mb-2 img-thumbnail"/></div>
                        <div className="media-body mb-5 text-white">
                            <h4 className="mt-0 mb-0">{user.name}</h4>
                            <p className=" mb-4"> <i className="fas fa-map-marker-alt mr-2"></i>{user.username}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-light p-4 d-flex justify-content-around text-center" style={{padding : 'none'}}>
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                            <h5 className="font-weight-bold mb-0 d-block">Email</h5><small className="text-muted"> <i className="fas fa-user mr-1"></i>{user.email}</small>
                        </li>
                        <li className="list-inline-item">
                            <h5 className="font-weight-bold mb-0 d-block">Phone</h5><small className="text-muted"> <i className="fas fa-user mr-1"></i>{user.phone}</small>
                        </li>
                        <li className="list-inline-item">
                            <h5 className="font-weight-bold mb-0 d-block">Website</h5><small className="text-muted"> <i className="fas fa-user mr-1"></i>{user.website}</small>
                        </li>
                    </ul>
                </div>
                <div className="px-4 py-3">
                    <h5 className="mb-0">Contact me</h5>
                    <div className="p-4 rounded shadow-sm bg-light">
                        <p className="font-italic mb-0">{user.email}</p>
                        <p className="font-italic mb-0">{user.phone}</p>
                        <p className="font-italic mb-0">{user.website}</p>
                    </div>
                </div>
                <div className="py-4 px-4">
                </div>
            </div>
        </div>
    </div>
    }

    </div>
)
}
