import { useState } from "react";
import { Movie, PageEnum, dummyMovieList } from "./Movie";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";

const Home = () => {
  const [movieList, setMovieList] = useState(dummyMovieList as Movie[]);
  const [addMovie, setAddMovie] = useState(PageEnum.list);
  const onAddHandler = () => {
    setAddMovie(PageEnum.add);
  };
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-6">
          Welcome to IMDB Clone
        </h1>
      </div>
      {addMovie === PageEnum.list && (
        <>
          <input
            type="Button"
            value="add movies"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 "
            onClick={onAddHandler}
          />
          <MovieList list={dummyMovieList} />
        </>
      )}
      {addMovie === PageEnum.add && <AddMovie />}
    </div>
  );
};

export default Home;
