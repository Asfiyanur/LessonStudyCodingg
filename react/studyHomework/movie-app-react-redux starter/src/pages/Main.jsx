import React, { useEffect } from "react";
import useMovieCalls from "../hooks/useMovieCalls";
import MovieCard from "../components/MovieCard";
import { useSelector } from "react-redux";
import loadingIcon from "../assets/loadingIcon.svg";

const Main = () => {
  const { getMovies } = useMovieCalls();
  const { movies, loading } = useSelector((state) => state.movie);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <form>
        <div className="flex justify-center flex-wrap">
          <input type="search" />
          <button type="submit">search</button>
          <div className="flex justify-center flex-wrap gap-8">
            {loading && <img src={loadingIcon} alt="loading" />}
            {movies?.results.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Main;
