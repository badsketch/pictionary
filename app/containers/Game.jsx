
const React = require('react');
const { useState } = require('react');
const ReactDOM = require('react-dom');

const TitleScreen = require('../components/TitleScreen');
const Pictionary = require('./Pictionary');
const EndScreen = require('../components/EndScreen');

const Status = {
    MENU: 1,
    IN_PROGRESS: 2,
    FINISHED: 3
}
function Game() {
    const [status, setStatus] = useState(Status.MENU);

    const startGame = () => {
        setStatus(Status.IN_PROGRESS);
    }

    const endGame = () => {
        setStatus(Status.FINISHED);
    }

    const restart = () => {
        setStatus(Status.MENU);
    }
    return (
        <div>
            {status === Status.MENU ? 
                <TitleScreen 
                    onClick={startGame}
                /> : null
            }
    
            {status === Status.IN_PROGRESS ? 
                <Pictionary 
                    onGameEnd={endGame}
                /> : null
            }
    
            { status == Status.FINISHED ? 
                <EndScreen 
                    onTryAgain={startGame}
                    onMenu={restart}
                /> : null
            }
        </div>
    )
}

module.exports = Game;