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
          className="bg-neutral-950 border rounded-md px-10 py-2 mb-4 text-white placeholder:text-center placeholder:font-description placeholder:text-gray-100 tracking-widest"
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
