import { Paper, InputBase } from "@mui/material";
import { SearchBarProps } from "../typings/search-bar.component";

export const SearchBar = ({ onHandleChange }: SearchBarProps) => {
  return (
    <Paper className="searchBar">
      <InputBase
        id="search-bar"
        name="search"
        placeholder="Search your card here..."
        onChange={(e) => onHandleChange(e.target.value)}
        sx={{ ml: 1, flex: 1 }}
      />
    </Paper>
  );
};
