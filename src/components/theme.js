import { createTheme } from '@mui/material/styles';


const Theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#0069B6',
    },
    background: {
      paper: '#005A9C'
    },
    text: {
      primary: "#FFFFFF"
    }
  },
  typography: {
    fontFamily: [
      'Lora',
      'sans-serif'
    ].join(','),
  },
});

export default Theme;