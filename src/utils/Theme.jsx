import { useState, useMemo, createContext, useContext } from 'react';
import { createTheme, CssBaseline } from '@mui/material';

export const ThemeContext = createContext(undefined);

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Create a theme instance based on the state
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode],
  );

  const handleThemeChange = event => {
    setDarkMode(event.target.checked);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      <CssBaseline />
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
