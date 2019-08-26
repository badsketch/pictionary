const React = require('react');
// const { useState } = require('react');
const ReactDOM = require('react-dom');

const AnswerField = require('./AnswerField');


class Pictionary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            word: '',
            imgUrl: '',
            roundsLeft: 1
        }
        this.getWord = this.getWord.bind(this);
        this.finishRound = this.finishRound.bind(this);
    }

    componentDidMount() {
        this.getWord();
    }

    async getWord() {
        const res = await fetch('/icon');
        const json = await res.json();
        const word = json.data.icon.term;
        const imgUrl = json.data.icon.preview_url;
        this.setState({
            word,
            imgUrl,
        })
        
    }

    finishRound() {
        this.getWord();
        if (this.state.roundsLeft == 0) {
            this.props.onGameEnd();
        } else {
            this.setState({
                roundsLeft: this.state.roundsLeft - 1
            })
        }
    }

    render() {
        return (
            <div>
                <h3>{this.state.word}</h3>
                <img src={this.state.imgUrl} />
                {/* <input type="button" value="get word" onClick={getWord}/> */}
                <AnswerField word={this.state.word} onCorrect={this.finishRound}/>
            </div>
        )
    }
}

module.exports = Pictionary;
