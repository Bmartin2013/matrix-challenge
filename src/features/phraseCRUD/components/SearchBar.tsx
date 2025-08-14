import { SearchBarProps } from "../typings/search-bar.component";

export const SearchBar = ({ onHandleChange }: SearchBarProps) => {
  return (
    <input
      id="search-bar"
      name="search"
      onChange={(e) => onHandleChange(e.target.value)}
    />
  );
};
