import { useState } from "react";
import { Movie } from "./Movie";

type Props = {
  onCancelClick: () => void;
  handleSubmit: (data: Movie) => void;
};

const AddMovie = ({ onCancelClick, handleSubmit }: Props) => {
  const [form, setForm] = useState({
    title: "",
    actors: "",
    director: "",
    releaseDate: "",
  });

  const handleSubmitbtn = (e: React.FormEvent) => {
    e.preventDefault();

    const data: Movie = {
      id: new Date().toISOString(),
      title: form.title,
      actors: form.actors,
      director: form.director,
      releaseDate: form.releaseDate,
    };

    handleSubmit(data);
    setForm({ title: "", actors: "", director: "", releaseDate: "" });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Movie</h2>
      <form
        className="bg-gray-800 p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmitbtn}
      >
        <div className="mb-4">
          <label className="block text-white">Movie Title</label>
          <input
            type="text"
            className="w-full p-2 mt-2 rounded bg-gray-700 text-white border border-gray-600"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Actors</label>
          <input
            type="text"
            className="w-full p-2 mt-2 rounded bg-gray-700 text-white border border-gray-600"
            value={form.actors}
            onChange={(e) => setForm({ ...form, actors: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Director</label>
          <input
            type="text"
            className="w-full p-2 mt-2 rounded bg-gray-700 text-white border border-gray-600"
            value={form.director}
            onChange={(e) => setForm({ ...form, director: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Release Date</label>
          <input
            type="date"
            className="w-full p-2 mt-2 rounded bg-gray-700 text-white border border-gray-600"
            value={form.releaseDate}
            onChange={(e) => setForm({ ...form, releaseDate: e.target.value })}
            required
          />
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
          >
            Add Movie
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

export default AddMovie;
