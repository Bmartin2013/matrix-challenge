import { Paper, InputBase } from "@mui/material";
import { SearchBarProps } from "@/features/phraseCRUD/typings";

export const SearchBar = ({ onHandleChange, disabled }: SearchBarProps) => {
  return (
    <Paper className="searchBar" data-testid="search-card-form">
      <InputBase
        id="search-bar"
        name="search"
        inputProps={{ "aria-label": "Search" }}
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
