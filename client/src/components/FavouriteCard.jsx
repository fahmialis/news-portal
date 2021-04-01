import React, { useState, useEffect } from 'react'

export default function FavouriteCard({favourite}) {

  // useEffect(() => {
  //   console.log(favourite,'card fav')
  // }, [favourite])

  return (
    <div className="col-sm-6 col-lg-4 mb-4" style={{textAlign:'justify', width: 240}}>
      <div className="card">
        <img className="card-img-top" src={favourite.urlToImage} alt="News image"/>
          <div className="card-body">
            <h5 className="card-title">{favourite.title}</h5>
            <p className="card-text">{favourite.description}</p>
            <a href={favourite.url} className="btn btn-primary">Continue reading</a>
          </div>
      </div>
  </div>
  )
}
