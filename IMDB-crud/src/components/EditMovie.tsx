import { useState, useEffect } from "react";
import { Movie } from "./Movie";

type Props = {
  data: Movie;
  onCancelClick: () => void;
  handleSubmit: (data: Movie) => void;
};

const EditMovie = ({ data, onCancelClick, handleSubmit }: Props) => {
  const [form, setForm] = useState<Movie>({
    id: data.id, // Ensure ID is preserved
    title: data.title || "",
    actors: data.actors || "",
    director: data.director || "",
    releaseDate: data.releaseDate
      ? new Date(data.releaseDate).toISOString().split("T")[0]
      : "", // Fix date format
  });

  // Update state when data changes
  useEffect(() => {
    setForm({
      id: data.id,
      title: data.title || "",
      actors: data.actors || "",
      director: data.director || "",
      releaseDate: data.releaseDate
        ? new Date(data.releaseDate).toISOString().split("T")[0]
        : "",
    });
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitbtn = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(form); // Ensure updated data is passed correctly
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Movie</h2>
      <form
        className="bg-gray-800 p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmitbtn}
      >
        <div className="mb-4">
          <label className="block text-white">Movie Title</label>
          <input
            type="text"
            name="title"
            className="w-full p-2 mt-2 rounded bg-gray-700 text-white border border-gray-600"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Actors</label>
          <input
            type="text"
            name="actors"
            className="w-full p-2 mt-2 rounded bg-gray-700 text-white border border-gray-600"
            value={form.actors}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Director</label>
          <input
            type="text"
            name="director"
            className="w-full p-2 mt-2 rounded bg-gray-700 text-white border border-gray-600"
            value={form.director}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Release Date</label>
          <input
            type="date"
            name="releaseDate"
            className="w-full p-2 mt-2 rounded bg-gray-700 text-white border border-gray-600"
            value={form.releaseDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
          >
            Save Changes
          </button>
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 w-full"
            onClick={onCancelClick}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMovie;
