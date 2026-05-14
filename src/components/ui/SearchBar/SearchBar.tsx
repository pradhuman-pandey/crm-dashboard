import { Search } from "lucide-react";
import type { SearchBarProps } from "./searchbar.types";

const SearchBar = ({
  placeholder = "Search...",
  onSearch,
  value,
  onChange,
  className,
  ...props
}: SearchBarProps) => {
  return (
    <div className={`relative w-full ${className}`}>
      <Search
        className="
          absolute
          left-3
          top-1/2
          -translate-y-1/2
          text-gray-400
        "
        size={18}
      />

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange?.(e);
          onSearch?.(e.target.value);
        }}
        className="
          w-full
          rounded-xl
          border
          border-gray-200
          bg-gray-50
          py-2.5
          pl-10
          pr-4
          text-sm
          transition-all
          duration-300
          focus:border-black
          focus:bg-white
        "
        {...props}
      />
    </div>
  );
};

export default SearchBar;