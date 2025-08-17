import { Paper, InputBase } from "@mui/material";
import { SearchBarProps } from "@/features/phraseCRUD/typings";

export const SearchBar = ({ onHandleChange, disabled }: SearchBarProps) => {
  return (
    <Paper className="searchBar">
      <InputBase
        id="search-bar"
        name="search"
        placeholder={
          disabled ? "Loading cards..." : "Search your card here..."
        }
        onChange={(e) => onHandleChange(e.target.value)}
        sx={{ ml: 1, flex: 1 }}
        disabled={disabled}
      />
    </Paper>
  );
};
