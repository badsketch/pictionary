const React = require('react');
const styles = require('../css/styles.css');

function EndScreen(props) {

    const answerStyles = {

    }
    return (
        <div>
            <h1 className="text-center">Score: {props.score}</h1>
            <div
                style={{
                    width: 500,
                    margin: '20px auto'
                }}
            >
                {
                    props.icons.map(({ word, imgUrl}) => {
                        return (
                            <div>
                                <img style = {{
                                    width: 30,
                                    height: 30,
                                    margin: 0
                                }}
                                src={imgUrl}/>
                                <span
                                    style={{
                                        position: 'relative',
                                        bottom: 5
                                    }}
                                >{word}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div style={{
                width: 100,
                margin: '0 auto'
            }}>
                <input type="button" onClick={props.onTryAgain} value="Try Again" />
                <input type="button" onClick={props.onMenu} value="Menu" />
            </div>
        </div>
    )
}

module.exports = EndScreen;