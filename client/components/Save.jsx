import React from 'react';
import ReactDOM from 'react-dom';

const Save = (props) => (
    <div className="savedResults">
        <table>
            <tbody>
                {props.savedResults.map((savedResult, i) => (
                    <tr key={i}>
                        <td>
                            <a className="savedResult">{(savedResult)}</a>
                        </td>
                    </tr>    
                ))}
            </tbody>
        </table>
        <br></br>
    </div>
);

export default Save;