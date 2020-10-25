import React, { FC } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import GlobalStyles from '@styles/globalStyles';
import muiTheme from '@styles/theme/muiTheme';
import ThemeWrapperProps from './ThemeWrapper.interface';

const ThemeWrapper: FC<ThemeWrapperProps> = ({
  children,
}: ThemeWrapperProps) => {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <GlobalStyles />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeWrapper;
