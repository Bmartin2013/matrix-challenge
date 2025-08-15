import { Box, CircularProgress } from "@mui/material";

export const LoadingState = ({spinnerClass}:{spinnerClass:string}) => (
  <Box className={spinnerClass}>
    <CircularProgress />
  </Box>
);
