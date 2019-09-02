const React = require('react');
const { useState } = require('react');
const { useEffect } = require('react');
const { useRef } = require('react');
const ReactDOM = require('react-dom');

const AnswerField = require('./AnswerField');


function Pictionary(props) {

    // for display
    const [word, setWord] = useState("");
    const [imgUrl, setUrl] = useState("");


    const [round, setRound] = useState(1);
    const [score, setScore] = useState(0);
    
    
    
    
    // gets the next icon when the round updates
    useEffect(() => {
        if (round > 10) {
            props.onRoundsFinished(score);
        } else {
            getIcon();
        }
    },[round])

    
    const startRound = () => {
        setRound(round + 1);
    }

    
    // tweaked version of Dan Abramov's setInterval to allow resetting
    // https://overreacted.io/making-setinterval-declarative-with-react-hooks/
    
    // to trigger a new round and reset interval
    const [reset, shouldReset] = useState(false);
    
    // stores setInterval callback because effects refresh on state change
    // so the original interval callback doesn't persist
    const savedCallback = useRef();
    
    
    useEffect(() => {
        savedCallback.current = startRound;
    });
    
    // recreates the interval using the stored callback
    // tweaked to allow resets 
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (!reset) {
            let id = setInterval(tick, 8000);
            return () => clearInterval(id)
        } else {
            // if resetting, then do discard callback from previous state
            // and reinitialize the interval
            setRound(round + 1);
            let id = setInterval(startRound, 8000);
            shouldReset(false);
            return () => clearInterval(id);
        }

    },[reset])

    

    const getIcon = () => {
        const { word, imgUrl } = props.icons[round - 1];
        setWord(word);
        setUrl(imgUrl);
    }

    const newRound = () => {
        setScore(score + 1);
        shouldReset(true);

    }

    return (
        <div style={{textAlign: 'center'}}>
            <h3>Score: {score}</h3>
            <h3>Round {round}</h3>
            <img src={imgUrl}/>
            <AnswerField word={word} onCorrect={newRound}/>
        </div>
    )
}

module.exports = Pictionary;
