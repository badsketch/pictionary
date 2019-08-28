
const React = require('react');
const { useState } = require('react');
const { useEffect } = require('react');
const ReactDOM = require('react-dom');

const TitleScreen = require('../components/TitleScreen');
const Pictionary = require('./Pictionary');
const EndScreen = require('../components/EndScreen');
const LoadScreen = require('./LoadScreen');
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
        console.log('in game, icons: ', data);
        setIcons(data);
        setStatus(Status.IN_PROGRESS)
    }

    const endGame = (score) => {
        setStatus(Status.FINISHED); 
        setFinalScore(score);
    }

    const restart = () => {
        setStatus(Status.MENU);
    }

    return (
        <div>
            {status === Status.MENU ? 
                <TitleScreen 
                    onClick={loadIcons}
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
                    onTimeUp={endGame}
                /> : null
            }
    
            { status === Status.FINISHED ? 
                <EndScreen 
                    score={finalScore}
                    icons={icons}
                    onTryAgain={loadIcons}
                    onMenu={restart}
                /> : null
            }
        </div>
    )
}

module.exports = Game;