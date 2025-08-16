import * as React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function BasicAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Matrix Challenge
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
