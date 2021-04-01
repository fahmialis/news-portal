import React, {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {addFavourites} from '../store/actions/favourites'


export default function newsCard({news}) {
  // const [news,setNews] = useState(props)
  const favourites = useSelector(state => state.favourites.data)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   console.log(favourites, 'favvvv');
  // },[dispatch])

  const addToFavorite = () => {
    const isAdded = favourites.find((favourite) => {
      // console.log(news.url, favourite.url)
      return favourite.url === news.url})
    if(!isAdded) {
      console.log(news, 'masuk')
      dispatch(addFavourites(news))
    } else if (isAdded) {
      console.log(news, 'udah ada')
    }
  }

  return (
    <div className="card mb-3" style={{width: "20rem", color: "black", textAlign: 'justify'}}>
      <img className="card-img-top" src={news.urlToImage} alt="News image"/>
      <div className="card-body">
        <h6 className="card-title" style={{fontSize: 12}}>{news.title}</h6>
        <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: 12}}>{news.description}</h6>
        <p className="card-text"></p>
        <div>
        <a href={news.url} className="card-link"><h6 style={{fontSize: 12, textAlign: 'end'}}>Read more</h6></a>
        <Button className="btn-sm" style={{fontSize: 12}} onClick={() => {
          addToFavorite()
        }}>add to favorite</Button>
        </div>
      </div>
    </div>
  )
}
