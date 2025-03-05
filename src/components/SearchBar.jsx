const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => {
    return (
      <form onSubmit={handleSearch} className="w-full rounded-full">
        <input
          type="text"
          //write something cool
          placeholder=" Search for anything..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-4 text-lg bg-[#252526] text-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
        />
      </form>
    );
  };
  
  export default SearchBar;
  