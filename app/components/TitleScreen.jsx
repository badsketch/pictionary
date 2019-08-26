const React = require('react');
const styles = require('../css/styles.css');

function TitleScreen(props) {
    return (
        <div>
            <h1 className="text-center">{'P<i>ct</i>onary'}</h1>
            <input type="button" value="Start!" onClick={props.onClick} />
        </div>
    )
}

module.exports = TitleScreen;