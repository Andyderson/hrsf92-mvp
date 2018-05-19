import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Input from './Input.jsx';
import Results from './Results.jsx';
import '../../public/style.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: [],
        };  
        this.fetchResults = this.fetchResults.bind(this);
    };

    componentDidMount() {

    }

    fetchResults (e) {
        if (e.key === 'Enter') {
            axios.get(`${BASE_URL}/results`, {params: {
                query: e.target.value
            }})
            .then((res) => {
                console.log('fetchResults Success', res.data[0])
                this.setState({
                    name: res.data[0].name,
                    description: res.data[0].description,
                });
            })
            .catch((error) => {
                if (error) {
                    console.log('fetchResults error', error);
                }
            })
        }
    }

    render () {
        return (
            <div>
                <img src="https://thecreatorwritings.files.wordpress.com/2015/08/mixing-clarity.jpg?" className="bannerPhoto"/>
                <div className="title"> - Aversion - </div>

                <div className="input">
                    <h3>Search Your Allergy!</h3>
                    <Input fetchResults={this.fetchResults}/>
                </div>

                <div className="result">
                    <h3>Check out your results below!</h3>
                    <Results name={this.state.name} description={this.state.description}/>
                </div>
            </div>
        );
    }    
};

export default App;