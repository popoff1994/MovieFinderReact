import MovieCard from "../components/movieCard"
import { useFetchFavoriteMoviesQuery } from "../store";



function FavoriteMoviesList() {
  const {data, error, isFetching } = useFetchFavoriteMoviesQuery();
  

  let content;
  if (isFetching) {
    content = <div>Loading;</div>
  } else if (error) {
    content = <div>Error loading movies.</div>;
  } else {
    
    content = data.map((movie) => {
      return (
      <MovieCard key={movie.id} movie={movie}></MovieCard>
      )
    });
  }
    return (
    <div className="row row-cols-3 row-cols-md-2 m-4">
      {content}
    </div>
  );
}

export default FavoriteMoviesList;