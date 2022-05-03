import React, {useMemo} from "react";
import {CssBaseline} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useSelector} from "react-redux";

export const ThemeWrapper = ({children}) => {

  const theme = useSelector(state => state.users.theme);
  const safeTheme = useMemo(() => theme?.themeMode || 'light', [theme]);

  const darkTheme = createTheme({
    palette: {
      mode: safeTheme,
      ...(safeTheme === 'light'
        ? {}
        : {
          background: {
            default: '#2B2B2B',
            paper: '#2B2B2B',
          },
        }),
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  )
};
