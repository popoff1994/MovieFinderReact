import { useSelector } from "react-redux";
import { useFetchSearchMovieQuery } from "../store";
import MovieCard from "../components/movieCard"

function SearchedMoviesList() {                              
    const searchTerm = useSelector((state) => {
        return state.searchMovie.searchTerm;
    });
  const {data, error, isFetching } = useFetchSearchMovieQuery(searchTerm);
                                                            
let content;
  if (isFetching) {
    content = <div>Loading;</div>
  } else if (error) {
    content = <div>Error loading movies.</div>;
  } else {
    content = data.results.map((movie) => {
      return <MovieCard key={movie.id} movie={movie}></MovieCard>
    });
  }
    return (
    <div className="row row-cols-3 row-cols-md-2 m-4">
      {content}
    </div>
  );
}
export default SearchedMoviesList;