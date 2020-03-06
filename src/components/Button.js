import React from 'react';

class CalcButtons extends React.Component {
    addValue = (e) => {
        this.props.sendData(e.target.innerHTML)
    }
    render() {
        return (
            <div className="buttons-container">
                <button id="clear" onClick={this.props.clean}>AC</button>
                <button id="equals" onClick={this.props.parentCalc}>=</button>
                <button id="add" onClick={this.addValue}>+</button>
                <button id="subtract" onClick={this.addValue}>-</button>
                <button id="divide" onClick={this.addValue}>/</button>
                <button id="multiply" onClick={this.addValue}>*</button>
                <button id="decimal" onClick={this.addValue}>.</button>
                <button id="zero" onClick={this.addValue}>0</button>
                <button id="one" onClick={this.addValue}>1</button>
                <button id="two" onClick={this.addValue}>2</button>
                <button id="three" onClick={this.addValue}>3</button>
                <button id="four" onClick={this.addValue}>4</button>
                <button id="five" onClick={this.addValue}>5</button>
                <button id="six" onClick={this.addValue}>6</button>
                <button id="seven" onClick={this.addValue}>7</button>
                <button id="eight" onClick={this.addValue}>8</button>
                <button id="nine" onClick={this.addValue}>9</button>
            </div>
        );
    }
}
export default CalcButtons 