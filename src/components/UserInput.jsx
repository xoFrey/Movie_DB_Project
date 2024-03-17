import { useContext, useEffect, useState } from "react";
import { filterInput } from "./helperfunctions/filterFunction";
import { FilteredMovies, GlobalInput } from "./Context";

const UserInput = ({ movieData, setMovieData }) => {
  const { userInput, setUserInput } = useContext(GlobalInput);
  const { filteredMovies, setFilteredMovies } = useContext(FilteredMovies);
  useEffect(() => {
    filterInput(userInput, movieData, setFilteredMovies);
  }, [movieData, userInput]);

  return (
    <section>
      <form>
        <input
          type="text"
          name="userInput"
          placeholder="Search a Movie"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </form>
    </section>
  );
};

export default UserInput;
