import { useEffect, useState, useContext } from "react";
import MovieList from "../components/MovieList";
import movies from "../assets/data/data";
import Buttons from "../components/Buttons";
import {
  sortAZ,
  sortZA,
  sortDateAsc,
  sortDateDes,
  sortBestRate,
} from "../components/helperfunctions/buttonFunctions";
import UserInput from "../components/UserInput";
import { FilteredMovies, GlobalInput } from "../components/Context";

const Home = () => {
  const [movieData, setMovieData] = useState(movies);
  const { userInput, setUserInput } = useContext(GlobalInput);
  const { filteredMovies, setFilteredMovies } = useContext(FilteredMovies);

  return (
    <section>
      <UserInput movieData={movieData} setMovieData={{ setMovieData }} />
      <Buttons name="A-Z" func={() => sortAZ(movieData, setMovieData)} />
      <Buttons name="Z-A" func={() => sortZA(movieData, setMovieData)} />
      <Buttons
        name="Sort by Date Ascending"
        func={() => sortDateAsc(movieData, setMovieData)}
      />
      <Buttons
        name="Sort by Date Descending"
        func={() => sortDateDes(movieData, setMovieData)}
      />
      <Buttons
        name="Best Rate"
        func={() => sortBestRate(movieData, setMovieData)}
      />
      {userInput < 0 ? (
        <MovieList data={movieData} />
      ) : (
        <MovieList data={filteredMovies} />
      )}
    </section>
  );
};

export default Home;
