import { useContext } from "react"; 
import { Search } from "lucide-react";               
import { HomePageContext } from "../HomePageContext";

export function SearchComponent() {
  const { search } = useContext(HomePageContext);

  return (
    <div className="flex-1 relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search by title or location..."
        value={search.searchTerm}
        onChange={search.handleSearchChange}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
