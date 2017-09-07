import React from 'react';

import Display from './display.jsx';
import Panel from './panel.jsx';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      mainVal: 0,
      val1: null,
      op: null,
      status: 'val1'
    };
    // this.displayStyle = {
    // };
    this.updateDisplay = this.updateDisplay.bind(this);
  }
  updateDisplay(num) {
    if( typeof num === "number" || num === '0' ) {
      this.setState({ mainVal: this.state.mainVal*10+(+num) });
    } else {
      if( ['+','-','/','*'].indexOf(num) !== -1 ) {
        if( this.state.status === "val2" ) {
          alert("Evaluate before using next operation!");
          return;
        }
        let currVal = this.state.mainVal;
        this.setState({ mainVal: 0, val1: currVal, op: num, status: 'val2' });
      } else {
        if( this.state.status === "val2" ) {
          let currVal = this.state.mainVal;
          let answer;
          switch (this.state.op) {
            case '+': answer = this.state.val1 + currVal;
                      break;
            case '-': answer = this.state.val1 - currVal;
                      break;
            case '*': answer = this.state.val1 * currVal;
                      break;
            case '/': answer = this.state.val1 / currVal;
                      break;
          }
          this.setState({ mainVal: answer, val1: null, op: null, status: 'val1' });
        }
      }
    }
  }
  render() {
    return(
      <div style={this.displayStyle}>
        <Display mainVal={this.state.mainVal}/>
        <Panel updateDisplay={this.updateDisplay}/>
      </div>
    )
  }
}

export default Calculator;
