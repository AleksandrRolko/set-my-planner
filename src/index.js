import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./store"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateIOAdapter from "@mui/lab/AdapterMoment";

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

function CustomAdapter(options) {
  const adapter = new DateIOAdapter(options);

  const constructDayObject = (day) => ({ charAt: () => ({ toUpperCase: () => day }) });

  return {
    ...adapter,
    getWeekdays() {
      const customWeekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      return customWeekdays.map((day) => constructDayObject(day));
    }
  };
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LocalizationProvider dateAdapter={CustomAdapter}>
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
