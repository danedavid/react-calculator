import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {red50, red400, green700, orange900, orange700} from 'material-ui/styles/colors';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.displayStyle = {
      width: "calc(33.33% - 2px)",
      height: "60px",
      margin: "0 1px",
      position: "relative"
    };
    this.backgroundColor = red400;
    this.labelStyle = {
      fontSize: "20px",
      position: "absolute",
      top: "50%",
      transform: "translate(-50%,-50%)"
    };
    if( this.props.dataStyle === 'clear' ) {
      this.displayStyle.width = "calc(100% - 2px)";
      this.backgroundColor = orange700;
    } else if( this.props.dataStyle === 'op' ) {
      if( this.props.val === '=' ) {
        this.backgroundColor = green700;
      } else {
        this.backgroundColor = orange900;
      }
    }

    this.inputValue = this.inputValue.bind(this);
  }
  inputValue() {
    return this.props.updateDisplay(this.props.val);
  }
  render() {
    return(
      <RaisedButton label={this.props.val}
        labelColor={red50}
        backgroundColor={this.backgroundColor}
        style={this.displayStyle}
        labelStyle={this.labelStyle}
        onClick={this.inputValue}/>
    );
  }
}

export default Button;
