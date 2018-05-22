import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Input from './Input.jsx';
import Results from './Results.jsx';
import Save from './Save.jsx';
import '../../public/style.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            savedResults: [],
        };  
        this.saveAllergy = this.saveAllergy.bind(this);
        this.fetchResults = this.fetchResults.bind(this);
        this.fetchDescription = this.fetchDescription.bind(this);
    };

    fetchResults (e) {
        if (e.key === 'Enter') {
            axios.get(`${BASE_URL}/results`, {params: {
                query: e.target.value
            }})
            .then((res) => {
                console.log('fetchResults Success', res);
                this.setState({
                    results: res.data,
                })
            })
            .catch((error) => {
                if (error) {
                    console.log('fetchResults error', error);
                }
            })
        }
    }

    fetchDescription (e) {
        if (e.key === 'Enter') {
            axios.get(`${BASE_URL}/description`, {params: {
                query: e.target.value
            }})
            .then((res) => {
                console.log('fetchDescription Success', res);
                this.setState({
                    results: res.data,
                })
            })
            .catch((error) => {
                if (error) {
                    console.log('fetchDescription error', error);
                }
            })
        }
    }

    saveAllergy (name) {
        const saved = this.state.savedResults.push(name);
        this.setState({
            savedResults: this.state.savedResults,
        })
    }

    render () {
        return (
            <div>
                <div className="pictureContainer">
                    <div className="title">Aversion</div>
                    <img src="https://www.800beachme.com/images/headerimages/2%20empty%20beach%20chairs%20-%20banner.jpg" className="bannerPhoto"/>
                    <div className="centered">Welcome to Aversion, the handy guide to your allergies!</div>
                </div>

                <div className="inputContainer">
                    <h3>Search for keywords about your allergy!</h3>
                    <Input fetchResults={this.fetchResults} fetchDescription={this.fetchDescription}/>
                </div>

                <div className="saveContainer">
                    <h3>Your saved allergies:</h3>
                    <Save savedResults={this.state.savedResults}/>
                </div>

                <div className="resultContainer">
                    <div className="resultCheck">Check out your results below:</div>
                    <Results results={this.state.results} saveAllergy={this.saveAllergy}/>
                </div>

            </div>
        );
    }    
};

export default App;