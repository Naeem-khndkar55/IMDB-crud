import { useState, useEffect } from "react";
import { Movie, PageEnum } from "./Movie";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";

const Home = () => {
  const [movieList, setMovieList] = useState<Movie[]>(() => {
    const savedMovieList = window.localStorage.getItem("MovieList");
    return savedMovieList ? JSON.parse(savedMovieList) : [];
  });

  const [addMovie, setAddMovie] = useState(PageEnum.list);
  const [edit, setEdit] = useState({} as Movie);

  useEffect(() => {
    window.localStorage.setItem("MovieList", JSON.stringify(movieList));
  }, [movieList]);

  const onAddHandler = () => {
    setAddMovie(PageEnum.add);
  };

  const showListPage = () => {
    setAddMovie(PageEnum.list);
  };

  const newMovie = (data: Movie) => {
    setMovieList([...movieList, data]);
    setAddMovie(PageEnum.list);
  };

  const deleteMovie = (data: Movie) => {
    const idx = movieList.indexOf(data);
    const copyList = [...movieList];
    copyList.splice(idx, 1);
    setMovieList(copyList);
  };

  const movieEdit = (data: Movie) => {
    setAddMovie(PageEnum.edit);
    setEdit(data);
  };

  const updateList = (data: Movie) => {
    const idx = movieList.findIndex((movie) => movie.id === data.id);
    if (idx !== -1) {
      const updatedMovies = [...movieList];
      updatedMovies[idx] = data;
      setMovieList(updatedMovies);
      setAddMovie(PageEnum.list); // Redirect to list page after editing
    }
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
          <MovieList
            list={movieList}
            onDeleteEventHndlr={deleteMovie}
            onEditHandler={movieEdit}
          />
        </>
      )}
      {addMovie === PageEnum.add && (
        <AddMovie onCancelClick={showListPage} handleSubmit={newMovie} />
      )}
      {addMovie === PageEnum.edit && (
        <EditMovie
          data={edit}
          onCancelClick={showListPage}
          handleSubmit={updateList}
        />
      )}
    </div>
  );
};

export default Home;
