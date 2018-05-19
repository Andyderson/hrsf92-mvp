import React from 'react';
import ReactDOM from 'react-dom';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };

    render () {
        return (
            <div>
                <h3>{this.props.name}</h3>
                {this.props.description}
            </div>
        )
    }
};

export default Results;