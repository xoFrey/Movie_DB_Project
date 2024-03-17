const filterInput = (userInput, movieData, setMovieData) => {
  const filteredMovies = [...movieData].filter((item) =>
    item.title.toLowerCase().includes(userInput.toLowerCase())
  );
  setMovieData(filteredMovies);
};

export { filterInput };
