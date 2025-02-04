import { useState } from "react";
import { Movie, PageEnum, dummyMovieList } from "./Movie";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";

const Home = () => {
  const [movieList, setMovieList] = useState<Movie[]>(dummyMovieList);
  const [addMovie, setAddMovie] = useState(PageEnum.list);

  const onAddHandler = () => {
    setAddMovie(PageEnum.add);
  };

  const showListPage = () => {
    setAddMovie(PageEnum.list);
  };

  const newMovie = (data: Movie) => {
    setMovieList([...movieList, data]); // Updates movieList state
    setAddMovie(PageEnum.list); // Redirects to movie list after adding
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
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600"
            onClick={onAddHandler}
          >
            Add Movie
          </button>
          <MovieList list={movieList} />
        </>
      )}
      {addMovie === PageEnum.add && (
        <AddMovie onCancelClick={showListPage} handleSubmit={newMovie} />
      )}
    </div>
  );
};

export default Home;
