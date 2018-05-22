import React from 'react';
import ReactDOM from 'react-dom';

const Results = (props) => (
    <div>
        <table>
            <tbody>
                {props.results.map((result, i) => (
                    <tr key={i}>
                        <td>
                            <br></br>
                            <a className="resultsURL" href={(result).url}><a className="resultsName">Name: {(result).name}</a></a>
                            <br></br>
                            <a className="resultsDescription"> Description:</a> {(result).description}
                            <br></br>
                            <i className="saveResults" onClick={() => props.saveAllergy((result).name)}>Save Result</i>
                        </td>
                    </tr>        
                ))}
            </tbody>
        </table>
    </div>
);

export default Results;