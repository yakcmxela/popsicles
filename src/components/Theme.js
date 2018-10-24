import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  deepPurple,
  purple,
  lightBlue,
  cyan,
  deepOrange,
} from '@material-ui/core/colors';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple.A700,
      light: purple.A200,
    },
    secondary: {
      main: lightBlue.A700,
      light: cyan.A400,
    },
    error: {
      main: deepOrange[500],
    },
  },
  typography: {
    headline: {
      fontSize: '1.1rem',
    },
  },
});

export default Theme;
