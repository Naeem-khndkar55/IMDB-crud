import { Movie } from "./Movie";

type Props = {
  list: Movie[];
};
const MovieList = (props: Props) => {
  const { list } = props;
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">IMDB Dummy Movie List</h2>
      <input
        type="Button"
        value="add movies"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 "
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {list.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            {/* <div className="w-full h-60 bg-gray-700 rounded-md"></div> */}
            <h3 className="text-lg font-semibold mt-2">{movie.title}</h3>
            <p className="text-sm text-gray-400">Actors: {movie.actors}</p>
            <p className="text-sm text-gray-400">Director: {movie.director}</p>
            <p className="text-sm text-gray-400">
              Release Date: {movie.releaseDate}
            </p>
            <div className="flex justify-between mt-4">
              <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 ">
                View
              </button>
              <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 ">
                Edit
              </button>
              <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
