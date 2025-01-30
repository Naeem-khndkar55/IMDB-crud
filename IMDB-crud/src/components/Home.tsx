import { useState } from "react";
import { Movie, dummyMovieList } from "./Movie";
import MovieList from "./MovieList";

const Home = () => {
  const [movieList, setMovieList] = useState(dummyMovieList as Movie[]);
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-6">
          Welcome to IMDB Clone
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Trending Movies</h2>
            <p className="text-gray-400">
              Discover the latest trending movies right now.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Top Rated</h2>
            <p className="text-gray-400">
              Explore the highest-rated movies of all time.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Upcoming Releases</h2>
            <p className="text-gray-400">
              Stay updated with the latest upcoming movie releases.
            </p>
          </div>
        </div>
      </div>
      <MovieList list={dummyMovieList} />
    </div>
  );
};

export default Home;
