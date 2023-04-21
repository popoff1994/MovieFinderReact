import { useSelector, useDispatch } from "react-redux";
import { changeSeriesSearchTerm } from "../store";
import { useNavigate } from "react-router-dom";

function SearchSeries() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchTerm = useSelector((state) => {
    return state.searchSeries.searchSeriesTerm;
  });

  const handleSearchTermChange = (event) => {
    dispatch(changeSeriesSearchTerm(event.target.value));
  }

  const handleSubmit = (event) => {
                 //dette for at undgå at Browseren automatisk prøver et udføre et submit  
                 //dispatch(changeSearchTerm(searchTerm));
                 event.preventDefault(); 
                 navigate("/searchedSeries");
  }

  return (
   <form className="" onSubmit={handleSubmit}>
     <label className="ml-5 mt-4 selectionText">Search Series:</label>
     <input className="input ml-3 " value={searchTerm} onChange={handleSearchTermChange}/>
     </form>    
  );
}

export default SearchSeries;