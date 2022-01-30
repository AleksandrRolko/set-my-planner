import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./store"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const materialTheme = createTheme({
  palette: {
    primary: {
      main: '#FFB600'
    }
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        fontFamily: 'Raleway',
        "&:before": {
          borderBottom: '1px solid rgba(151, 151, 151, 0.55) !important'
        }
      },
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <ThemeProvider theme={materialTheme}>
            <App/>
          </ThemeProvider>
        </MuiPickersUtilsProvider>
      </LocalizationProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
