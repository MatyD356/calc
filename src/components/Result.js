import React, { Component } from 'react';

class Result extends Component {


    render() {
        let { result } = this.props;
        return (
            <div className="result">
                <p id="display" className="display">{result.length < 1 ? 0 : result}</p>
            </div>
        )
            ;
    }
}


export default Result;