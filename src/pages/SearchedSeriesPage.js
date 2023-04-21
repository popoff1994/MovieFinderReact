import { useSelector } from "react-redux";
import { useFetchSearchSeriesQuery } from "../store";
import SeriesCard from "../components/SeriesCard"

function SearchedSeriesPage() {                              
    const searchTerm = useSelector((state) => {
        return state.searchSeries.searchTerm;
    });
  const {data, error, isFetching } = useFetchSearchSeriesQuery(searchTerm);
                                                            
let content;
  if (isFetching) {
    content = <div>Loading;</div>
  } else if (error) {
    content = <div>Error loading Series.</div>;
  } else {
    content = data.results.map((series) => {
      return <SeriesCard key={series.id} series={series}></SeriesCard>
    });
  }
    return (
    <div className="row row-cols-3 row-cols-md-2 m-4">
      {content}
    </div>
  );
}
export default SearchedSeriesPage;