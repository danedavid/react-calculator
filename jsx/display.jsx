import React from 'react';
import {grey700} from 'material-ui/styles/colors';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.displayStyle = {
      height: "150px",
      width: "100%",
      backgroundColor: grey700,
      position: "relative"
    };
    this.mainStyle = {
      color: "#fff",
      fontSize: "72px",
      fontFamily: "'Roboto', sans-serif",
      position: "absolute",
      right: "0",
      bottom: "0"
    }
    this.historyStyle = {
      fontSize: "20px",
      color: "#ddd",
      position: "absolute",
      right: "0",
      top: "0"
    }
  }
  render() {
    return(
      <div style={this.displayStyle}>
        <span style={this.mainStyle}>{this.props.mainVal}</span>
        <span style={this.historyStyle}>{this.props.history}</span>
      </div>
    )
  }
}

export default Display;
