const greeting = require('./greeting');
const ReactDOM = require('react-dom'); // REQUIRE REACT DOM !

import '../css/style.css';

window.onload = function () {
  const App = document.querySelector('#example-app');

  ReactDOM.render(greeting, App);
}
