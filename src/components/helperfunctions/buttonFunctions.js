const sortAZ = (movieData, setMovieData) => {
  // [...movie] => spread operator -> duplicates the state for re-render, otherwise it doesnt re-render with sort
  const sorted = [...movieData].sort((a, b) => a.title.localeCompare(b.title));
  setMovieData(sorted);
};
const sortZA = (movieData, setMovieData) => {
  const sorted = [...movieData].sort((a, b) => b.title.localeCompare(a.title));
  setMovieData(sorted);
};
const sortDateDes = (movieData, setMovieData) => {
  const sorted = [...movieData].sort((a, b) => (a.year <= b.year ? 1 : -1));
  setMovieData(sorted);
};
const sortDateAsc = (movieData, setMovieData) => {
  const sorted = [...movieData].sort((a, b) => (a.year >= b.year ? 1 : -1));
  setMovieData(sorted);
};
const sortBestRate = (movieData, setMovieData) => {
  const sorted = [...movieData].sort((a, b) => (a.rate <= b.rate ? 1 : -1));
  setMovieData(sorted);
};

export { sortAZ, sortZA, sortDateAsc, sortDateDes, sortBestRate };
