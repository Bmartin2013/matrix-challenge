import { PhraseCrudLayout } from "@/features/phraseCRUD/layouts/PhraseCrudLayout";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "@/theme";
import BasicAppBar from "@/features/phraseCRUD/components/BasicAppBar";




export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BasicAppBar/>
      <PhraseCrudLayout />
    </ThemeProvider>
  );
}
