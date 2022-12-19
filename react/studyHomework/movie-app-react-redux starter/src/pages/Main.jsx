import React, { useEffect, useState } from "react";
import useMovieCalls from "../hooks/useMovieCalls";
import MovieCard from "../components/MovieCard";
import { useSelector } from "react-redux";
import loadingIcon from "../assets/loadingIcon.svg";

const Main = () => {
  const { getMovies } = useMovieCalls();
  const { movies, loading } = useSelector((state) => state.movie);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getMovies(pageNumber);
  }, [pageNumber]);

  return (
    <div>
      <div className="flex justify-center flex-wrap">
        <form>
          <input type="search" />
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
