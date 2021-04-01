import React, { useState, useEffect } from 'react'

export default function FavouriteCard(props) {
  const [favourite,setFavourite] = useState(props)

  // useEffect(() => {
  //   console.log(favourite,'card fav')
  // }, [favourite])

  return (
    <div className="col-sm-6 col-lg-4 mb-4" style={{textAlign:'justify', width: 240}}>
      <div className="card">
        <img className="card-img-top" src={favourite.favourite.news.urlToImage} alt="News image"/>
          <div className="card-body">
            <h5 className="card-title">{favourite.favourite.news.title}</h5>
            <p className="card-text">{favourite.favourite.news.description}</p>
            <a href={favourite.favourite.news.url} className="btn btn-primary">Continue reading</a>
          </div>
      </div>
  </div>
  )
}
