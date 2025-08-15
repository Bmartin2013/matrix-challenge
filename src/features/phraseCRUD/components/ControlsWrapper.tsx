import { Paper, Stack } from "@mui/material";

export const ControlsWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Paper sx={{ p: 2, mb: 3, mt:3 }}>
      <Stack spacing={2}>{children}</Stack>
    </Paper>
  );
};