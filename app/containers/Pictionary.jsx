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
    
    // to trigger a new round and reset interval
    const [reset, shouldReset] = useState(false);
    
    // 
    const [score, setScore] = useState(0);
    const scoreRef = useRef(score);
    scoreRef.current = score;



    useEffect(() => {
        if (round > 10) {
            props.onTimeUp(score);
        } else {
            getIcon();
        }
    },[round])

    const startRound = () => {
        setRound(round + 1);
    }


    const savedCallback = useRef();
    useEffect(() => {
        savedCallback.current = startRound;
    });

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (!reset) {
            let id = setInterval(tick, 8000);
            return () => clearInterval(id)
        } else {
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
