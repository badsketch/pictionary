const React = require('react');
const ReactDOM = require('react-dom');
const style = require('./css/styles.css');
/* Import Components */
// const HelloWorld = require('./components/HelloWorld');
const Game = require('./containers/Game');

ReactDOM.render(<Game />, document.getElementById('main'));