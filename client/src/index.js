import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from './App';
import * as serviceWorker from './serviceWorker';

import './App.css';
import './assets/scss/style.scss';
import './components/sections/Hero.js';
import './components/sections/Explore';

class Doc extends React.Component {
componentDidMount() {
    document.title = "Fundeable";
}
}

const history = createBrowserHistory();



ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



