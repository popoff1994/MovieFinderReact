import {Routes, Route} from 'react-router-dom';
import MovieImg from '../assets/images/movie_black2.jpg'
import Dropdown from './Dropdown';
import Home from '../pages/home'
import SearchMovie from '../components/searchMovies';
import SearchedMoviesList from '../pages/searchedMovieList';
import UpcomingMoviesList from '../pages/UpcomingMoviesList';
import FavoriteMoviesList from '../pages/FavoriteMoviesList';
import TrailerMovie from '../pages/TrailerMovie';
import PopularSeriesList from '../pages/PopularSeriesList';
import FavoriteSeriesList from '../pages/FavoriteSeriesList';
import HighestRatedMoviesList from "../pages/HighestRatedMoviesList";
import PopularMoviesList from "../pages/PopularMoviesList";
import { useState } from 'react';
import SearchSeries from './SearchSeries';
import SearchedSeriesPage from '../pages/SearchedSeriesPage';


function Navbar() {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) =>{
        setSelection(option)
    }
    const links = [
        {label: 'Home', path:'/'},
        {label: '- Movies ↓'},
        {label: 'Popular Movies', path:'/popular'},
        {label: 'Highest-rated', path:'/highest-rated'},
        {label: 'Upcoming movies', path:'/upcomingMovies'},
        {label: 'Favorite Movies', path:'/favorites'},
        {label: '- Series ↓'},
        {label: 'Popular Series', path:'/popularseries'},
        {label: 'Favorite Series', path:'/favoriteseries'},
    ];


    return <div key={links.label}>
          <div className="jumbotron pb-3 pt-3 d-flex justify-content-center">
        <div className="navbar navbar-expand-l">
          <nav className="nav navbar-nav">
          <span className='h1 ml-5 selectionText'>React Moviefinder <img alt='movieImg' className="rounded movie_img ml-5 " src={MovieImg} width="75" height="75" /><br></br></span>
          <span className="d-flex justify-content-between p-0 h5 selectionText">This small App demonstrates React, Redux-Toolkit, RTK Query and React-Router</span>
          <h1 className='h5 d-flex justify-content-center selectionText mt-5'>Movie and Series Selection</h1>
            <Dropdown onChange={handleSelect} value={selection} links={links}></Dropdown>
            <SearchMovie></SearchMovie><SearchSeries></SearchSeries>
          </nav>
        </div>
          
      
        </div>
        <Routes>
            <Route path='/' element={<Home/>} />  
            <Route path='/popular' element={<PopularMoviesList />} />    
            <Route path='/highest-rated' element={<HighestRatedMoviesList />} />
            <Route path='/searchedMovie' element={<SearchedMoviesList />}/>
            <Route path='/searchedSeries' element={<SearchedSeriesPage />}/>
            <Route path='/upcomingMovies' element={<UpcomingMoviesList />}/>
            <Route path='/favorites' element={<FavoriteMoviesList/>}/>
            <Route path='/favoriteSeries' element={<FavoriteSeriesList/>}/>
            <Route path='/youtube' element={<TrailerMovie/>}/>
            <Route path='/popularSeries' element={<PopularSeriesList/>}/>
        </Routes>
    </div>
}

export default Navbar;