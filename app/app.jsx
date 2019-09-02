const React = require('react');
const ReactDOM = require('react-dom');
const style = require('./css/styles.css');

/* Import Components */
const Game = require('./components/Game');

ReactDOM.render(<Game />, document.getElementById('main'));