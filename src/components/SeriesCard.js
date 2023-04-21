import { useAddFavoriteSeriesMutation, useAddFavoriteSeriesIDMutation, useRemoveFavoriteSeriesIDMutation, useRemoveFavoriteSeriesMutation, useFetchFavoriteSeriesIDQuery } from "../store/apis/favoritesApi";
import { useFetchSeriesProviderMutation, useFetchVideoSeriesMutation } from "../store";
import { changePlayTrailer } from "../store/slices/trailerMovieSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";





function SeriesCard({series}){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const posterBasePath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
    const [addFavoriteSeries] = useAddFavoriteSeriesMutation();
    const [addFavoriteSeriesID] = useAddFavoriteSeriesIDMutation();
    const [removeFavoriteSeriesId] = useRemoveFavoriteSeriesIDMutation();
    const [ removeFavoriteSeries] = useRemoveFavoriteSeriesMutation();
    const {data, isSuccess} = useFetchFavoriteSeriesIDQuery();
    const [fetchVideo, result] = useFetchVideoSeriesMutation();
    const [fetchSeriesProvider, seriesResult,] = useFetchSeriesProviderMutation();

    const handlePlayTrailer = () => {
        fetchVideo(series);
        if (result.isSuccess){
            let key = result.data.results[0].key;
            dispatch(changePlayTrailer(key));
            navigate("/youtube");
        }
    }
    const handleSeriesProvider = () => {
        fetchSeriesProvider(series);
        if(seriesResult.isSuccess){
            let seriesProvider = seriesResult.data.results.US.link; // bruger US da den har mange flere fuldtræffere i forhold til dette setup.
            console.log(seriesProvider)
            window.open(seriesProvider);
        }
    }

    let favoriteIds = [];
    if(isSuccess) {
        favoriteIds = data;
    }
    const handleFavoritesSeries = () => {
        if(favoriteIds.includes(series.id)){
            removeFavoriteSeries(series);
            removeFavoriteSeriesId(series.id);
            
        }
        else{
            addFavoriteSeries(series);
            addFavoriteSeriesID(series.id);
        }
    };
        
    return (
       
        <div className="col-lg-2 mb-4">
            <div className="card">
                <img src= {posterBasePath + series.poster_path} className="card-img-top" alt="..." onClick={handleSeriesProvider} />
                <div className="card-body">
                    <h5 className="card-title "><span>{series.name.substring(0,200)}</span></h5>
                    <div><span className={(favoriteIds.includes(series.id) ? "fas fa-star" : "far fa-star")} onClick={handleFavoritesSeries}></span></div>
                        <span className="ml-1">{series.vote_average}</span>
                    <p className="card-text">{series.overview.substring(0,125).concat('....')}</p>
                    <div className="d-flex justify-content-between p-0"><span className="far fa-calendar" aria-hidden="true">{series.release_date}</span><button onClick={handlePlayTrailer} className="far fa-play-circle"></button></div>            
                </div>
            </div>
        </div>
       
       
      );
}
export default SeriesCard;
