import React, {useState, useEffect} from 'react'

export default function newsCard(props) {
  const [news,setNews] = useState(props)
  // console.log(news,'news');
  return (
    <div className="card mb-3" style={{width: "25rem", color: "black", textAlign: 'justify'}}>
      <img className="card-img-top" src={news.news.urlToImage} alt="News image"/>
      <div className="card-body">
        <h6 className="card-title" style={{fontSize: 12}}>{news.news.title}</h6>
        <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: 12}}>{news.news.description}</h6>
        <p className="card-text"></p>
        <a href={news.news.url} className="card-link"><h6 style={{fontSize: 12, textAlign: 'end'}}>Read more</h6></a>
      </div>
    </div>
  )
}
