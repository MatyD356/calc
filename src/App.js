import React from 'react';
import './App.css';
import NumButtons from './components/Button'
import Result from './components/Result';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: "",
      avibleDots: 1,
      blockingZero: true,
      lastOperator: []
    }
  }
  onClick = button => {

    if (button === "=") {
      this.calculate()
    } else if (button === "AC") {
      this.reset()
    } else {
      //handling nums
      if (/[0-9]/.test(button) === true) {
        //multiple 0 handling
        if (button === "0") {
          if (this.state.blockingZero === true && this.state.result[this.state.result.length - 1] === "0") {
            console.log("blocked")
          } else {
            this.setState({
              result: this.state.result + button,
            })
          }
        } else {
          this.setState({
            result: this.state.result + button,
            blockingZero: false
          })
        }
        //handling special chars
      } else {
        //handling multiple dots
        if (button === "+" || "-" || "*" || "/") {
          (() => {
            this.setState({
              avibleDots: 1,
              blockingZero: true,
            })
          })();
        }
        if (button === "." && this.state.avibleDots === 1) {
          this.setState({
            result: this.state.result + button,
            avibleDots: 0
          })
        } else if (button === "." && this.state.avibleDots === 0) {
          console.log("no dots")
        }
        else if (this.state.result.endsWith("+") || this.state.result.endsWith("*") || this.state.result.endsWith("/")) {
          (() => {
            this.setState({
              result: (() => {
                if (button === "-") {
                  return this.state.result
                } else {
                  //changing last operator
                  let arr = this.state.result.split('').slice(0, -1)
                  arr.push(button)
                  arr = arr.join('')
                  console.log(arr)
                  return arr
                }
              })()
            })
          })();
        }
        else {
          this.setState({
            result: this.state.result + button
          })
        }
      }

    }
  }
  calculate = () => {
    console.log(this.state.result, this.state.numCount)
    try {
      this.setState({
        //eslint-disable-next-line
        result: (eval(this.state.result) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  }
  reset = () => {
    this.setState({
      result: "",
      avibleDots: 1,
      blockingZero: true
    })
  }
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };
  render() {
    return (
      <div className="App">
        <Result result={this.state.result} />
        <NumButtons onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
