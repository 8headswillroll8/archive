import searchIcon from "../assets/graphics/search-icon.svg";
import type { SearchBarProps } from "../types/SearchBarProps";

function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  return (
    <div className="m-6 space-y-3">
      <h2>SOMETHING SPECIFIC, OR JUST BROWSING?</h2>
      <div className="flex items-center gap-2 px-4  bg-brand-neutral-100 focus-within:outline-[1.5px] focus-within:outline-brand-accent">
        <img src={searchIcon} alt="" className="h-4" />
        <input
          type="search"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-2.5 focus:outline-none"
          aria-label="Search products"
        />
      </div>
    </div>
  );
}

export default SearchBar;
