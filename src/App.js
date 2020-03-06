import React from 'react';
import './App.css';
import CalcButtons from './components/Button'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeInput: false,
      activeArr: [],
      input: [],
      val: 0
    }
  }

  componentDidMount() {
    let script = document.createElement('script')
    script.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'
    document.body.appendChild(script)
  }

  calc = () => {
    this.setState({
      input: this.state.input.concat(this.state.activeArr.join('')),
      activeArr: []
    }, () => {
      this.state.input.map((item, index) => {
        if (item === "+") {
          this.setState({
            activeArr: [parseInt(this.state.input[index - 1], 10) + parseInt(this.state.input[index + 1], 10)]
          }, () => { console.log(this.state.val) })
        }
        return null;
      })
    });
  }

  getDataFromChild = (childData) => {
    if (/\d/.test(childData) === true) {
      this.setState({
        activeInput: true,
        activeArr: this.state.activeArr.concat(childData)
      })
    }
    else if (childData === '.') {
      this.setState({
        activeArr: this.state.activeArr.concat(childData)
      })

    } else {
      this.setState({
        input: (this.state.input.concat(this.state.activeArr.join('')).concat(childData)),
        activeArr: []
      })
    }
  }

  clear = () => {
    this.setState({
      activeInput: false,
      input: [],
      val: 0
    })
  }
  render() {
    return (
      <div className="App">
        <div id="display"
          className="display"
          onClick={this.calc}>
          {this.state.activeInput === false ? 0 : this.state.input.length < 1 ? this.state.activeArr : this.state.input}</div>
        <div
          className="display">
          {this.state.activeArr.length < 1 ? 0 : this.state.activeArr}</div>
        <CalcButtons
          parentCalc={this.calc}
          clean={this.clear}
          sendData={this.getDataFromChild} />
      </div>
    );
  }
}

export default App;
