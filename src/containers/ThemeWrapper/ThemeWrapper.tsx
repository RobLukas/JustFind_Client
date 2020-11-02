import React, { FC } from 'react';
import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import GlobalStyles from 'styles/globalStyles';
import muiTheme from 'styles/theme/muiTheme';
import { ThemeProvider } from 'styled-components';
import darkMode from 'styles/theme/darkMode';
import ThemeWrapperProps from './ThemeWrapper.interface';
import lightMode from 'styles/theme/lightMode';

const ThemeWrapper: FC<ThemeWrapperProps> = ({
  children,
}: ThemeWrapperProps) => {
  const { isDarkMode } = useSelector((state: RootState) => state.themeMode);
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
