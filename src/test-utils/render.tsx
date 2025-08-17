import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '@/theme';

export const renderWithTheme = (ui: ReactElement) =>
  render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>
  );