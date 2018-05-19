import React from 'react';
import ReactDOM from 'react-dom';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };

    render () {
        return (
            <div className="inputContainer">
                <div className="inputSearch">
                    <input type="text" placeholder="Allergy Keyword" onKeyPress={this.props.fetchResults}></input>
                    {/* <input type="text" placeholder="Allergy Keyword" onKeyPress={this.props.fetchResults}></input>
                    <input type="text" placeholder="Allergy Keyword" onKeyPress={this.props.fetchResults}></input>
                    <input type="text" placeholder="Allergy Keyword" onKeyPress={this.props.fetchResults}></input> */}
                </div>
            </div>
        )
    }
};

export default Input;