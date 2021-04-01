import React, {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {addFavouritesAsync} from '../store/actions/favourites'

export default function newsCard(props) {
  const [news,setNews] = useState(props)
  const favourites = useSelector(state => state.favourites.data)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   console.log(favourites, 'favvvv');
  // },[dispatch])

  const addToFavorite = (data) => {
    const isAdded = favourites.find((favourite) => favourite.news.publishedAt === data.publishedAt)
    console.log(data);
    if(!isAdded) {
      console.log(data);
      dispatch(addFavouritesAsync(data))
    } else if (isAdded) {
      console.log(data);
      console.log('udah ada');
    }
  }

  return (
    <div className="card mb-3" style={{width: "20rem", color: "black", textAlign: 'justify'}}>
      <img className="card-img-top" src={news.news.urlToImage} alt="News image"/>
      <div className="card-body">
        <h6 className="card-title" style={{fontSize: 12}}>{news.news.title}</h6>
        <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: 12}}>{news.news.description}</h6>
        <p className="card-text"></p>
        <div>
        <a href={news.news.url} className="card-link"><h6 style={{fontSize: 12, textAlign: 'end'}}>Read more</h6></a>
        <Button className="btn-sm" style={{fontSize: 12}} onClick={() => {
          addToFavorite(news)
        }}>add to favorite</Button>
        </div>
      </div>
    </div>
  )
}
