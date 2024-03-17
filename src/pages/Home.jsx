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
  const [active, setActive] = useState(false);

  console.log(active);

  return (
    <section className="flex flex-col items-center bg-black">
      <h1 className="bg-bgImage bg-cover bg-center bg-no-repeat h-80 w-full text-5xl md:text-7xl text-white text-center font-headline font-bold  mb-10 py-8 tracking-widest ">
        MovieLand
      </h1>
      <UserInput movieData={movieData} setMovieData={{ setMovieData }} />
      <div className="flex items-center justify-center flex-wrap p-2 gap-3">
        <Buttons
          name="A-Z"
          active={active}
          func={() => {
            setActive((active) => !active);
            sortAZ(movieData, setMovieData);
          }}
        />
        <Buttons
          name="Z-A"
          func={() => {
            setActive((active) => !active);
            sortZA(movieData, setMovieData);
          }}
        />
        <Buttons
          name="Sort by Date Ascending"
          func={() => {
            setActive((active) => !active);
            sortDateAsc(movieData, setMovieData);
          }}
        />

        <Buttons
          name="Sort by Date Descending"
          func={() => {
            setActive((active) => !active);
            sortDateDes(movieData, setMovieData);
          }}
        />
        <Buttons
          name="Best Rate"
          func={() => {
            setActive((active) => !active);
            sortBestRate(movieData, setMovieData);
          }}
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
