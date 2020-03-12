import React from 'react';

class NumButtons extends React.Component {

    render() {
        return (
            <div className="buttons-container">
                <div className="actions">
                    <button
                        className="buttons"
                        id="equals"
                        value="="
                        onClick={e => this.props.onClick(e.target.value)}>=</button>
                    <button
                        className="buttons"
                        id="add"
                        value="+"
                        onClick={e => this.props.onClick(e.target.value)}>+</button>
                    <button
                        className="buttons"
                        id="subtract"
                        value="-"
                        onClick={e => this.props.onClick(e.target.value)}>-</button>
                    <button
                        className="buttons"
                        id="multiply"
                        value="*"
                        onClick={e => this.props.onClick(e.target.value)}>*</button>
                    <button
                        className="buttons"
                        id="divide"
                        value="/"
                        onClick={e => this.props.onClick(e.target.value)}>/</button>
                    <button
                        className="buttons"
                        id="decimal"
                        value="."
                        onClick={e => this.props.onClick(e.target.value)}>.</button>
                    <button
                        className="buttons"
                        id="clear"
                        value="AC"
                        onClick={e => this.props.onClick(e.target.value)}>AC</button>
                </div>
                <div className="number">
                    <div>
                        <button
                            className="buttons"
                            id="zero"
                            value="0"
                            onClick={e => this.props.onClick(e.target.value)}>0</button>
                        <button
                            className="buttons"
                            id="one"
                            value="1"
                            onClick={e => this.props.onClick(e.target.value)}>1</button>
                        <button
                            className="buttons"
                            id="two"
                            value="2"
                            onClick={e => this.props.onClick(e.target.value)}>2</button>
                        <button
                            className="buttons"
                            id="three"
                            value="3"
                            onClick={e => this.props.onClick(e.target.value)}>3</button>
                        <button
                            className="buttons"
                            id="four"
                            value="4"
                            onClick={e => this.props.onClick(e.target.value)}>4</button></div>
                    <button
                        className="buttons"
                        id="five"
                        value="5"
                        onClick={e => this.props.onClick(e.target.value)}>5</button>
                    <button
                        className="buttons"
                        id="six"
                        value="6"
                        onClick={e => this.props.onClick(e.target.value)}>6</button>
                    <button
                        className="buttons"
                        id="seven"
                        value="7"
                        onClick={e => this.props.onClick(e.target.value)}>7</button>
                    <button
                        className="buttons"
                        id="eight"
                        value="8"
                        onClick={e => this.props.onClick(e.target.value)}>8</button>
                    <button
                        className="buttons"
                        id="nine"
                        value="9"
                        onClick={e => this.props.onClick(e.target.value)}>9</button>
                </div>
            </div>
        )
    }
}
export default NumButtons 