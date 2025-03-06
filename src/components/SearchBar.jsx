// SearchBar Component
const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <form 
      onSubmit={handleSearch} 
      className="w-full sm:w-80 md:w-80 lg:w-96 xl:w-[400px]"
    >
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2  sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 text-sm sm:text-sm md:text-base lg:text-base xl:text-lg bg-[#252526] text-gray-300 rounded-bl-2xl rounded-tr-2xl focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
      />
    </form>
  );
};

export default SearchBar;