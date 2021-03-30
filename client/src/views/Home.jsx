import React, {useState, useEffect} from 'react'
import NewsCard from '../components/newsCard'
import ClipLoader from "react-spinners/ClipLoader"

export default function Home() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=1a59ee3dcc8843718c9f4b3226d9f95e')
      .then(res => res.json())
      .then(data => {
        // console.log(data.articles, 'artilces');
        let articles = data.articles
        // console.log(articles)
        setNews(articles)
      })
      .catch(err => {
        console.log(err);
      })
      .finally(_ => {
        // console.log(news, 'ini news')
        setLoading(false)
      })
  }, [])
  
  if(error) {
    return <h2>error</h2>
  }

  return (
    <div>
      <div className="jumbotron" style={{background : 'none'}}>
        <h1 className="display-4">Hello!</h1>
          <h2 className="lead">This is a simple website for showing news from multiple online API.</h2> 
      </div>
      <div className="row">
      <div className="col-lg-9 col-sm-9" style={{paddingLeft: 40}}>
        <h2>EDITOR'S PICK</h2>
        {
          loading ? <ClipLoader/> :
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <img src="https://images.wsj.net/im-317756/social" className="d-block w-100" alt="Editor's pick"/>
              <div className="carousel-caption d-none d-md-block" style={{color:'white'}}>
                <h5><b>WSJ News Exclusive | Florida Investor Commits $100 Million Toward Potential Bid for Tribune Publishing</b></h5>
                <p>A Florida investor has expressed interest in joining an 11th-hour effort by a Maryland hotel magnate to acquire Tribune Publishing Co. and wrest the company away from hedge fund Alden Global Capital, LLC.(wsj.com)</p>
              </div>
            </div>
        }
      </div>
      <div className="col-lg-3 col-sm-3" style={{padding: 0, margin: 0}}>
        <h5 style={{textAlign :'center', marginBottom: 21}}><b>MOST POPULAR NEWS</b></h5>
        <div className="container-fluid row justify-content-center overflow-auto" style={{padding: 0, margin: 0, backgroundColor:'light-gray', height: 600}}>
        {
          loading ? <ClipLoader/> :
          news.map(news => {
            return <NewsCard news={news} key={news.url}></NewsCard>
          })
        }
        </div>
      </div>
      </div>
    </div>
  )
}
