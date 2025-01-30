const AddMovie = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Movie</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-white">Movie Title</label>
          <input
            type="text"
            className="w-full p-2 mt-2 rounded bg-gray-700 text-white border border-gray-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Actors</label>
          <input
            type="text"
            className="w-full p-2 mt-2 rounded bg-gray-700 text-white border border-gray-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Director</label>
          <input
            type="text"
            className="w-full p-2 mt-2 rounded bg-gray-700 text-white border border-gray-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Release Date</label>
          <input
            type="date"
            className="w-full p-2 mt-2 rounded bg-gray-700 text-white border border-gray-600"
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full">
          Add Movie
        </button>
      </div>
    </div>
  );
};

export default AddMovie;
