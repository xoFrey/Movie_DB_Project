import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { useState } from "react";
import { GlobalInput, FilteredMovies } from "./components/Context";

function App() {
  const [userInput, setUserInput] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  return (
    <FilteredMovies.Provider value={{ filteredMovies, setFilteredMovies }}>
      <GlobalInput.Provider value={{ userInput, setUserInput }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </GlobalInput.Provider>
    </FilteredMovies.Provider>
  );
}

export default App;
