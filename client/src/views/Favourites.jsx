import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import FavouriteCard from '../components/FavouriteCard'
import ClipLoader from "react-spinners/ClipLoader"

export default function Favourites() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const favourites = useSelector(state => state.favourites)
  useEffect(() => {
    console.log(favourites, 'fav');
  }, [favourites])

  return (
    <div className="mt-5">
      <br/>
      <div className="jumbotron" style={{background : 'none'}}>
        <h1 className="display-4">Favourites</h1>
          <h2 className="lead">You can continue reading your favourite news from here</h2> 
      </div>
      <br/><br/>
      <div class="row justify-content-center" style={{margin: 0}}>
        {/* card */}
        {
          favourites.map(favourite => {

            return <FavouriteCard favourite={favourite} key={favourite.url}></FavouriteCard>
          })
        }
        {/* card */}


        
      </div>
    </div>
  )
}
