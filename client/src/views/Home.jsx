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
          <h2>mau buat description</h2>
          <h4 style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam dicta atque ut dolore reiciendis quibusdam, iste magni laudantium quod, neque animi sed ipsum aliquid minima soluta aut, facere tempora consequuntur? Cumque saepe distinctio, nulla culpa debitis accusamus id error laborum exercitationem libero consequuntur impedit quis aspernatur labore voluptatibus quasi? Accusantium?</h4>

          <h4 style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nostrum incidunt, dolorum minus numquam ullam tenetur reprehenderit eius ut doloribus accusamus laboriosam culpa molestias? Saepe?</h4>
        </div>
        <div className="col-lg-3 col-sm-3" style={{padding: 0, margin: 0}}>
          <h5 style={{textAlign :'center'}}><b>MOST POPULAR NEWS</b></h5>
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
