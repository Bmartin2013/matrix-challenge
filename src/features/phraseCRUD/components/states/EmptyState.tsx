import { Box, Typography } from "@mui/material";

export const EmptyState = ({message}:{message : string}) => (
    <Box textAlign="center" py={4}>
    <Typography variant="h6" color="text.secondary">
      {message}
    </Typography>
  </Box>
);
