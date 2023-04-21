import { useAddFavoriteMutation, useAddFavoriteIDMutation, useRemoveFavoriteIdMutation, useFetchFavoriteMovieIDQuery, useRemoveFavoriteMutation } from "../store/apis/favoritesApi";
import { useFetchMovieProviderMutation, useFetchVideoMoviesMutation } from "../store/apis/moviesApi";
import { changePlayTrailer } from "../store/slices/trailerMovieSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";





function MovieCard({movie}){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const posterBasePath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
    const [addFavorite] = useAddFavoriteMutation();
    const [removeFavorite] = useRemoveFavoriteMutation();
    const [removeFavoriteId] = useRemoveFavoriteIdMutation();
    const [addFavoriteMovieId] = useAddFavoriteIDMutation();
    const {data, isSuccess} = useFetchFavoriteMovieIDQuery();
    const [fetchVideo, result] = useFetchVideoMoviesMutation();
    const [fetchInfo, infoResult] = useFetchMovieProviderMutation();

    const handlePlayTrailer = () => {
        fetchVideo(movie);
        if (result.isSuccess){
            let key = result.data.results[0].key;
            console.log(key)
            dispatch(changePlayTrailer(key));
            navigate("/youtube");
        }
    }
    const handleMovieinfo = () => {
        fetchInfo(movie);
        if(infoResult.isSuccess){
            let movieInfo = infoResult.data.results.US.link; // bruger US da den har mange flere fuldtræffere i forhold til dette setup.
            window.open(movieInfo);
        }
    }


    let favoriteIds = [];
    if(isSuccess) {
        favoriteIds = data;
    }
    const handleFavoritesMovie = () => {
        if(favoriteIds.includes(movie.id)){
            removeFavorite(movie);
            removeFavoriteId(movie.id);
            
        }
        else{
            addFavorite(movie);
            addFavoriteMovieId(movie.id);
        }
    };
        
    return (
        <div className="col-lg-2 mb-4">
            <div className="card">
                <img src= {posterBasePath + movie.poster_path} onClick={handleMovieinfo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title "><span>{movie.title.substring(0,200)}</span></h5>
                    <div><span className={(favoriteIds.includes(movie.id) ? "fas fa-star" : "far fa-star")} onClick={handleFavoritesMovie}></span></div>
                        <span className="ml-1">{movie.vote_average}</span>
                    <p className="card-text">{movie.overview.substring(0,125).concat('....')}</p>
                    <div className="d-flex justify-content-between p-0"><span className="far fa-calendar" aria-hidden="true">{movie.release_date}</span><button onClick={handlePlayTrailer} className="far fa-play-circle"></button></div>            
                </div>
            </div>
        </div>
      );
}
export default MovieCard;
