import React from "react";
import movieSlice from "../features/movieSlice";

const MovieCard = ({ movie }) => {
  const imageAPI = `https://image.tmdb.org/t/p/w1280${movie.poster_path}`;
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <img
        src={movie.poster_path ? imageAPI : defaultImage}
        alt="poster Movie "></img>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            <svg
              className="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">
            {movie.title}
          </div>
          <p className="text-gray-700 text-base">{movie.overview}</p>
        </div>
        <div className="flex justify-evenly items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="https://www.nicepng.com/png/detail/184-1841632_free-png-gold-star-png-images-transparent-yellow.png"
            alt="stars"
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none text-3xl">
              {movie.vote_average}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
