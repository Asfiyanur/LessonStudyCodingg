import React, { useEffect } from "react";
import useMovieCalls from "../hooks/useMovieCalls";
import MovieCard from "../components/MovieCard";
import { useSelector } from "react-redux";

const Main = () => {
  const { getMovies } = useMovieCalls();
  const { movies } = useSelector((state) => state.movie);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <form>
        <input type="search" />
        <button type="submit">search</button>
        <div className="flex justify-center flex-wrap">
          {movies?.results.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </form>
    </div>
  );
};

export default Main;
