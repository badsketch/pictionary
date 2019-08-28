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

    const inputStyle = {
        outline: 'none',
        border: correct === true ? '1px solid green' 
            : correct === false ? "1px solid red" : "",
        margin: '0 auto',
        width: '50%',
        display: 'inline-block'
    }
    
    const charCountStyle = {
      position: 'relative',
      right: 45
    }
    
    return (
        <div style={{textAlign: 'center'}}>
            <input 
                style={inputStyle}
                value={inputValue} 
                placeholder="type here" 
                onChange={handleChange}
            />
            <span style={charCountStyle}>{inputValue.length}/{props.word.length}</span>
        </div>
    )
}

module.exports = AnswerField;