import React, {useState, useEffect} from 'react'
import NewsCard from '../components/newsCard'
import ClipLoader from "react-spinners/ClipLoader"
import { Carousel } from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import {addNews} from '../store/actions'

export default function Home() {
  const news = useSelector(state => state.news)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true)
    fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=1a59ee3dcc8843718c9f4b3226d9f95e')
      .then(res => res.json())
      .then(data => {
        dispatch(addNews(data))
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
      <br/>
      <div className="jumbotron" style={{background : 'none'}}>
        <h1 className="display-4">Hello!</h1>
          <h2 className="lead">This is a simple website for showing news from multiple online API.</h2> 
      </div>
      <div className="row">
      <div className="col-lg-9 col-sm-9" style={{paddingLeft: 40}}>
      <h2>EDITOR'S PICK</h2>
      {
        loading ? <ClipLoader/> :
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.wsj.net/im-317682/social"
            alt="First slide"
          />
          <Carousel.Caption style={{backgroundColor: 'black'}}>
            <h3>WSJ News Exclusive | Florida Investor Commits $100 Million Toward Potential Bid for Tribune Publishing</h3>
            <p>A Florida investor has expressed interest in joining an 11th-hour effort by a Maryland hotel magnate to acquire Tribune Publishing Co. and wrest the company away from hedge fund Alden Global Capital, LLC.(wsj.com)</p>
            <a href="https://www.wsj.com/articles/florida-investor-commits-100-million-toward-potential-bid-for-tribune-publishing-11617035755" className="card-link"><h6 >Read more...</h6></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.wsj.net/im-317741/social"
            alt="Second slide"
          />
          <Carousel.Caption style={{backgroundColor: 'black'}}>
            <h3>Pair of Covid-19 Drugs Performed Well in Studies, Makers Say</h3>
            <p>Showing promise were an experimental therapy from Humanigen and a drug cocktail being developed by Eli Lilly, GlaxoSmithKline and Vir</p>
            <a href="https://www.wsj.com/articles/pair-of-covid-19-drugs-performed-well-in-studies-makers-say-11617034810" className="card-link"><h6>Read more...</h6></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.wsj.net/im-317758/social"
            alt="Third slide"
          />
          <Carousel.Caption style={{backgroundColor: 'black'}}>
            <h3>Pfizer, Moderna Covid-19 Vaccines Effective in Real World, CDC Says</h3>
            <p>The vaccines were 90% effective reducing the risk of infection in one of the first studies to look at real-world use in the U.S.</p>
            <a href="https://www.wsj.com/articles/pfizer-moderna-covid-19-vaccines-effective-in-real-world-cdc-says-11617038463" className="card-link"><h6>Read more...</h6></a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
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
