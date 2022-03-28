import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#F8F0E3',
    },
    secondary: {
      main: '#0069B6',
    },
    background: {
      paper: '#005A9C',
    },
    text: {
      primary: '#F8F0E3',
    },
  },
  typography: {
    fontFamily: ['Lora', 'sans-serif'].join(','),
  },
});

export default Theme;
