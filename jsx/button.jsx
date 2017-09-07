import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {red50, red400, orange900} from 'material-ui/styles/colors';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.displayStyle = {
      width: "33%",
      height: "50px",
      margin: "1px",
      fontSize: "24px"
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
        onClick={this.inputValue}/>
    );
  }
}

export default Button;
