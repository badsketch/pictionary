
const React = require('react');
const { useState } = require('react');

const TitleScreen = require('./TitleScreen');
const Pictionary = require('./Pictionary');
const EndScreen = require('./EndScreen');
const LoadScreen = require('./LoadScreen');

// conditionally display components depending on status
const Status = {
    MENU: 1,
    LOADING: 2,
    IN_PROGRESS: 3,
    FINISHED: 4
}

function Game() {
    const [status, setStatus] = useState(Status.MENU);
    const [finalScore, setFinalScore] = useState(0);
    const [icons, setIcons] = useState([]);


    const loadIcons = () => {
        setStatus(Status.LOADING);
    }

    const startGame = (data) => {
        setIcons(data);
        setStatus(Status.IN_PROGRESS)
    }

    const endGame = (score) => {
        setStatus(Status.FINISHED); 
        setFinalScore(score);
    }

    const toMenu = () => {
        setStatus(Status.MENU);
    }

    return (
        <div>
            {status === Status.MENU ? 
                <TitleScreen 
                    onStart={loadIcons}
                /> : null
            }

            {status === Status.LOADING ?
                <LoadScreen
                    onFetched={startGame}
                /> : null
            }
            {status === Status.IN_PROGRESS && icons.length ? 
                <Pictionary 
                    icons={icons}
                    onRoundsFinished={endGame}
                /> : null
            }
    
            { status === Status.FINISHED ? 
                <EndScreen 
                    score={finalScore}
                    icons={icons}
                    onTryAgain={loadIcons}
                    onMenu={toMenu}
                /> : null
            }
        </div>
    )
}

module.exports = Game;