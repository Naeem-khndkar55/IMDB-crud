import { Movie } from "./Movie";

type Props = { onClose: () => void; data: Movie };

const ViewMovie = (props: Props) => {
  const { onClose, data } = props;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg w-full relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl  text-gray-600 font-bold mt-4">
          Name:{data.title}
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Release Date:{data.releaseDate}{" "}
        </p>
        <p className="mt-2 text-gray-600 font-semibold">
          Director: {data.director}{" "}
        </p>
        <p className="mt-2 text-gray-600 font-semibold">
          Actors: {data.actors}
        </p>
      </div>
    </div>
  );
};

export default ViewMovie;
