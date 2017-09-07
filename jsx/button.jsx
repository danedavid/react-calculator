import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {red50, red400, orange900} from 'material-ui/styles/colors';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.displayStyle = {
      width: "33.17%",
      height: "60px",
      margin: "1px",
      position: "relative"
    };
    this.labelStyle = {
      fontSize: "20px",
      position: "absolute",
      top: "50%",
      transform: "translate(-50%,-50%)"
    };
    this.inputValue = this.inputValue.bind(this);
  }
  inputValue() {
    return this.props.updateDisplay(this.props.val);
  }
  render() {
    return(
      <RaisedButton label={this.props.val}
        labelColor={red50}
        backgroundColor={red400}
        style={this.displayStyle}
        labelStyle={this.labelStyle}
        onClick={this.inputValue}/>
    );
  }
}

export default Button;
