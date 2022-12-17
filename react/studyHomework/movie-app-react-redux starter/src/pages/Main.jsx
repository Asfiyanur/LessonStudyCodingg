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
        <div className="flex justify-center flex-wrap">
          <input type="search" />
          <button type="submit">search</button>
          <div className="flex justify-center flex-wrap gap-8">
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
