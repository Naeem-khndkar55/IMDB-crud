import { Movie } from "./Movie";

type Props = {
  list: Movie[];
};
const MovieList = (props: Props) => {
  const { list } = props;
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">IMDB Dummy Movie List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {list.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <div className="w-full h-60 bg-gray-700 rounded-md"></div>
            <h3 className="text-lg font-semibold mt-2">{movie.title}</h3>
            <p className="text-sm text-gray-400">Actors: {movie.actors}</p>
            <p className="text-sm text-gray-400">Director: {movie.director}</p>
            <p className="text-sm text-gray-400">
              Release Date: {movie.releaseDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
