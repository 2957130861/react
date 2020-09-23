import React from 'react';
import App from './APP'
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
    <App/>,
  document.getElementById('root')
);
serviceWorker.unregister();
