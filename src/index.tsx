import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import store from './redux/store';
import './index.css';
import App from './App';
import { AUTHENTICATED } from './redux/type';

import './assets/plugins/nucleo/css/nucleo.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";

const token = localStorage.getItem("token");
if (token) {
  const user = localStorage.getItem("user") || "";

  store.dispatch(
    {
      type: AUTHENTICATED,
      payload: {
        token: localStorage.getItem("token"),
        user: JSON.parse(user)
      }
    }
  )
}

ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
