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
      history: '',
      status: 'val1'
    };
    this.updateDisplay = this.updateDisplay.bind(this);
  }
  updateDisplay(num) {
    if( num === 'C' ) {
      this.setState({ mainVal: 0, val1: null, op: null, history: '', status: 'val1' });
      return;
    }
    if( typeof num === "number" || num === '0' ) {
      let prev = '';
      if( this.state.status === "result" ) {
        this.setState({ mainVal: +num, status: 'val1' });
      } else {
        this.setState({ mainVal: this.state.mainVal*10+(+num) });
        prev += this.state.history;
      }
      if( num != 0 ) {
        this.setState({ history: prev+num});
      }
    } else {
      if( ['+','-','/','*'].indexOf(num) !== -1 ) {
        if( this.state.status === "val2" ) {
          alert("Evaluate before using next operation!");
          return;
        }
        if( this.state.status === "result" ) {
          return;
        }
        let currVal = this.state.mainVal;
        this.setState({ mainVal: 0, val1: currVal, op: num, history: currVal+num, status: 'val2' });
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
          this.setState({ mainVal: answer, val1: null, op: null, history: this.state.history+currVal, status: 'result' });
        }
      }
    }
  }
  render() {
    return(
      <div style={this.displayStyle}>
        <Display mainVal={this.state.mainVal} history={this.state.history}/>
        <Panel updateDisplay={this.updateDisplay}/>
      </div>
    )
  }
}

export default Calculator;
