import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#6a5acd" },
    secondary: { main: "#ffb300" },
    error: { main: "#e11b84" },
    background: {
      default: "#f5f5f5",
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 600, fontSize: "2rem" },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "6px 16px",
        },
        containedPrimary: {
          boxShadow: "none",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "16px",
          marginBottom: "12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderBottom: "3px solid #fafafa",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          "&.specialCardContent": {
            borderRadius: "5px",
            background: "#6a5acd",
            padding: "1rem",
            textAlign: "center",
            overflowWrap: "break-word",
            whiteSpace: "normal",
            flexGrow: 1,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "&.searchBar": {
            p: "2px 4px",
            marginTop: "2rem",
            display: "flex",
            alignItems: "center",
            width: "100%",
            mb: 3,
            ml: 1,
            flex: 1,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.cardPhrase": {
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        ".card-grid": {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 2,
        },
        ".inputBox": {
          display: "flex",
          gap: 2,
          mb: 3,
          width: "100%",
        },
      },
    },
  },
});
