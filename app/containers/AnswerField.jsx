const React = require('react');
const { useState } = require('react');


function AnswerField(props) {
    const [inputValue, setInput] = useState("");
    const [correct, setCorrect ] = useState(null);

    const handleChange = e => {
        setInput(e.target.value);
        if (e.target.value.length === props.word.length) {
            if (e.target.value.toLowerCase() === props.word.toLowerCase()) {
                setInput("");
                setCorrect(true);
                props.onCorrect();
            } else {
                setCorrect(false);
            }
        }
    }

    const style = {
        outline: 'none',
        border: correct === true ? '1px solid green' 
            : correct === false ? "1px solid red" : ""
    }
    return (
        <div>
            <input 
                style={style}
                value={inputValue} 
                placeholder="type here" 
                onChange={handleChange}
            />
            <div>{inputValue.length}/{props.word.length}</div>
        </div>
    )
}

module.exports = AnswerField;