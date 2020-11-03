import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import GlobalStyles from 'styles/globalStyles';
import muiTheme from 'styles/theme/muiTheme';
import { ThemeProvider } from 'styled-components';
import darkMode from 'styles/theme/darkMode';
import ThemeWrapperProps from './ThemeWrapper.interface';
import lightMode from 'styles/theme/lightMode';
import { selectIsDarkMode } from 'features/ThemeMode/themeModeSlice';

const ThemeWrapper: FC<ThemeWrapperProps> = ({
  children,
}: ThemeWrapperProps) => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const themeMode = isDarkMode ? darkMode : lightMode;

  return (
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default ThemeWrapper;
