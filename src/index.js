import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const axios = require("axios");

// (async () => {
//   axios.interceptors.request.use(
//     function (req) {
//       req.time = { startTime: new Date() };
//       return req;
//     },
//     (err) => {
//       return Promise.reject(err);
//     }
//   );

//   axios.interceptors.response.use(
//     function (res) {
//       res.config.time.endTime = new Date();
//       res.duration =
//         res.config.time.endTime - res.config.time.startTime;
//       return res;
//     },
//     (err) => {
//       return Promise.reject(err);
//     }
//   );

//   axios
//     .get("http://localhost:3000")
//     .then((res) => {
//       console.log(res.duration)
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// })();
