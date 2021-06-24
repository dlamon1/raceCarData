import { createMuiTheme } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: green[700]
    },
    secondary: {
      main: '#ffffff'
    },
    text: {
      primary: '#ffffff',
      secondary: '#9e9e9e'
    }
  }
});