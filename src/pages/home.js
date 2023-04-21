import React from 'react'
import MovieImg from '../assets/images/movie_black2.jpg'
 
const Home = () => (
  <div>
    <div className="logo">Movie Finder</div>
    <img alt='movieImg' className="center" src={MovieImg}/>
  </div>
)
 
export default Home