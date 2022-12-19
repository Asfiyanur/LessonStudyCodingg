import React, { useEffect, useState } from "react";
import useMovieCalls from "../hooks/useMovieCalls";
import MovieCard from "../components/MovieCard";
import { useSelector } from "react-redux";
import loadingIcon from "../assets/loadingIcon.svg";
import { toastWarningNotify } from "../helpers/ToastNotify";

const Main = () => {
  const { getMovies, getSearchMovie } = useMovieCalls();
  const { movies, loading } = useSelector((state) => state.movie);
  const { currentUser } = useSelector((state) => state.auth);

  const [pageNumber, setPageNumber] = useState(1);
  const [searchMovie, setSearchMovie] = useState("");

  useEffect(() => {
    getMovies(pageNumber);
  }, [pageNumber]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchMovie && currentUser) {
      getSearchMovie(searchMovie);
      setSearchMovie("");
    } else if (!currentUser) {
      toastWarningNotify("please logn to seach");
    } else {
      toastWarningNotify("Please enter a text");
    }
  };

  return (
    <div>
      <div className="flex justify-center flex-wrap">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={(e) => setSearchMovie(e.target.value)}
          />
          <button type="submit">search</button>
        </form>
        <div className="flex justify-center flex-wrap gap-8">
          {loading && <img src={loadingIcon} alt="loading" />}
          {movies?.results.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>

      <div className="pagination flex justify-center gap-4">
        <button onClick={() => pageNumber > 1 && setPageNumber(pageNumber - 1)}>
          Back
        </button>
        <p>{pageNumber}</p>
        <button onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Main;
