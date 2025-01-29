const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">IMDB-crud</div>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 text-white rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
          </div>
          <ul className="flex space-x-6 text-lg">
            <li className="hover:text-yellow-400 cursor-pointer">Menu</li>
            <li className="hover:text-yellow-400 cursor-pointer">Watchlist</li>
            <li className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300 cursor-pointer">
              Sign In
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
