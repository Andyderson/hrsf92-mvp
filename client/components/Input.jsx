import React from 'react';
import ReactDOM from 'react-dom';

const Input = (props) => (
    <div className="inputSearch">
        <div className="inputText">
            <input className="inputTextBox" type="text" placeholder="Allergy Name" onKeyPress={props.fetchResults}></input>
            <input className="inputTextBox" type="text" placeholder="Allergy Keywords Description" onKeyPress={props.fetchDescription}></input>
        </div>
    </div>
);

export default Input;