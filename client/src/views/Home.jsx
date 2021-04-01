import React, {useState, useEffect} from 'react'
import NewsCard from '../components/newsCard'
import ClipLoader from "react-spinners/ClipLoader"
import { Carousel } from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import { addNewsAsync } from '../store/actions/news'

export default function Home() {
  const news = useSelector(state => state.news.data)
  const loading = useSelector(state => state.news.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addNewsAsync())
  }, [])


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
            src="https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/10_02_2020_15_57_03_6766537.jpg?width=920&format=jpeg"
            alt="First slide"
            style={{height: 550}}
          />
          <Carousel.Caption style={{backgroundColor: 'black'}}>
            <h3>Global chip supply chain increasingly vulnerable to massive disruption, study finds</h3>
            <p>But the Semiconductor Industry Association, representing most U.S. chipmakers, on Thursday said it found more than 50 places in the supply chain where a single region has more than 65% market share...</p>
            <a href="https://www.devdiscourse.com/article/headlines/1518339-global-chip-supply-chain-increasingly-vulnerable-to-massive-disruption-study-finds" className="card-link"><h6 >Read more...</h6></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static3.srcdn.com/wordpress/wp-content/uploads/2021/03/Shazam-possible-Mandela-effect-scene.jpg"
            alt="Second slide"
            style={{height: 550}}
          />
          <Carousel.Caption style={{backgroundColor: 'black'}}>
            <h3>Shazam Director Points Out Bizarre Mandela Effect In DC Movie</h3>
            <p>A new example of the Mandela effect appears to have popped up with the DC film Shazam, as some fans claim to have seen a different end-credits scene.</p>
            <a href="https://screenrant.com/shazam-throne-room-scene-deleted-director-response-debunked/" className="card-link"><h6>Read more...</h6></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://vmcdn.ca/f/files/shared/site_images/national_business_2017.jpg"
            alt="Third slide"
            style={{height: 550}}
          />
          <Carousel.Caption style={{backgroundColor: 'black'}}>
            <h3>Newsmax keeps most, not all, of post-election samplers</h3>
            <p>NEW YORK — The trajectory of the conservative network Newsmax is a clear example of how statistics can tell different stories, depending on how you look at them.</p>
            <a href="https://www.vancouverisawesome.com/national-business/newsmax-keeps-most-not-all-of-post-election-samplers-3591994" className="card-link"><h6>Read more...</h6></a>
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
