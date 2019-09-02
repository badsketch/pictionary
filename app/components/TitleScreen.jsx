const React = require('react');
const styles = require('../css/styles.css');

function TitleScreen(props) {

    const notes = [
        "there are 10 rounds",
        "you have 8 seconds to try to guess the icon",
        "case doesn't matter, but spaces do",
        "my best is 8, so see if you can beat that!",
        "also, no looking at dev tools for the answers",
    ]

    return (
        <div>
            <h1 className="text-center">{'P<i>ct</i>onary'}</h1>
            <ul style={{
                width: 400,
                margin: '20px auto',
                
            }}>
                {
                    notes.map(note => <li>{note}</li>)
                }
            </ul>
            <input
                style={{
                    margin: '0 auto'
                }} 
                type="button" 
                value="Start!" 
                onClick={props.onStart} />
        </div>
    )
}

module.exports = TitleScreen;