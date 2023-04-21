import { useFetchPopularTVShowsQuery } from "../store";
import SeriesCard from "../components/SeriesCard";

function PopularSeriesList() {                                   
  const {data, error, isFetching } = useFetchPopularTVShowsQuery();
  
                                                            
let content;
  if (isFetching) {
    content = <div>Loading;</div>
  } else if (error) {
    content = <div>Error loading movies.</div>;
  } else {
    content = data.results.map((series) => {
      return (
      <SeriesCard key={series.id} series={series} ></SeriesCard>
      )
    });
  }
    return (
    <div className="row row-cols-3 row-cols-md-2 m-4">
      {content}
    </div>
  );
}
export default PopularSeriesList;