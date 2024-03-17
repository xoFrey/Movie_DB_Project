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
  const { userInput } = useContext(GlobalInput);
  const { filteredMovies } = useContext(FilteredMovies);

  return (
    <section className="flex flex-col items-center bg-black">
      <h1 className="bg-bgImage bg-cover bg-center bg-no-repeat h-80 w-full text-7xl text-white text-center font-headline font-bold  mb-10 p-8 tracking-widest ">
        MovieLand
      </h1>
      <UserInput movieData={movieData} setMovieData={{ setMovieData }} />
      <div className="flex items-center p-2 gap-3">
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
      </div>
      {userInput < 0 ? (
        <MovieList data={movieData} />
      ) : (
        <MovieList data={filteredMovies} />
      )}
    </section>
  );
};

export default Home;
