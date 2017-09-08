import React from 'react';
import {grey700} from 'material-ui/styles/colors';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: this.props.mainVal
    };
    this.displayStyle = {
      height: "150px",
      width: "100%",
      backgroundColor: grey700,
      color: "#fff",
      fontSize: "72px",
      fontFamily: "'Roboto', sans-serif",
      textAlign: "right"
    };
  }
  render() {
    return(
      <div style={this.displayStyle}>
        <span>{this.props.mainVal}</span>
      </div>
    )
  }
}

export default Display;
