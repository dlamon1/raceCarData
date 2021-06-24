import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { theme } from "./Theme";
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './App';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('roots')
)