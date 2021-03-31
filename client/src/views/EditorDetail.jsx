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
      <div className="jumbotron" style={{background : 'none', marginBottom: 0, paddingBottom: 32 }}>
        <h1 className="display-4">Hello!</h1>
          <h2 className="lead">Learn more about {user.name}.</h2> 
      </div>
    {
      loading ? <ClipLoader/> :
      <div className="row py-5 px-4" style={{margin: 0}}>
        <div className="col-md-5 mx-auto">
            {/* <!-- Profile widget --> */}
            <div className="bg-white shadow rounded overflow-hidden">
                <div className="px-4 pt-0 pb-4 cover" style={{backgroundColor: 'black'}}>
                    <div className="media align-items-end profile-head">
                        <div className="profile mr-3"><img src="https://picsum.photos/300/300?random=5" alt="..." width="130" className="rounded mb-2 img-thumbnail"/></div>
                        <div className="media-body mb-5 text-white">
                            <br/><br/>
                            <h4 className="mt-0 mb-0">{user.name}</h4>
                            <p className=" mb-4"> <i className="fas fa-map-marker-alt mr-2"></i>Username : {user.username}</p>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3">
                    <h4 className="mb-0">Contact me</h4><br/>
                    <div className="p-4 rounded shadow-sm bg-light">
                        <p className="font-italic mb-0"><b>Email </b>: {user.email}</p>
                        <p className="font-italic mb-0"><b>Phone</b> : {user.phone}</p>
                        <p className="font-italic mb-0"><b>Website</b> : {user.website}</p>
                    </div>
                </div>
                <div className="py-4 px-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="mb-0">Recent photos I took :)</h5>
                </div>
                <div className="row">
                    <div className="col-lg-6 mb-2 pr-lg-1"><img src="https://picsum.photos/300/200?random=1" alt="my pic :)" className="img-fluid rounded shadow-sm"/></div>
                    <div className="col-lg-6 mb-2 pl-lg-1"><img src="https://picsum.photos/300/200?random=2" alt="my pic :)" className="img-fluid rounded shadow-sm"/></div>
                    <div className="col-lg-6 pr-lg-1 mb-2"><img src="https://picsum.photos/300/200?random=3" alt="my pic :)" className="img-fluid rounded shadow-sm"/></div>
                    <div className="col-lg-6 pl-lg-1"><img src="https://picsum.photos/300/200?random=4" alt="my pic :)" className="img-fluid rounded shadow-sm"/></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    }
    </div>
    )
}
