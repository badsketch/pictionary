const React = require('react');

function EndScreen(props) {
    return (
        <div>
            <h1 className="text-center">Score: {props.score}</h1>
            <div>
                <input type="button" onClick={props.onTryAgain} value="Try Again" />
                <input type="button" onClick={props.onMenu} value="Menu" />
            </div>
        </div>
    )
}

module.exports = EndScreen;