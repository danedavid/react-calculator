import React from 'react';

import Button from './button.jsx';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.updateDisplay = this.updateDisplay.bind(this);
  }
  updateDisplay(num) {
    return this.props.updateDisplay(num);
  }
  render() {
    let buttonsArray = [1,2,3,4,5,6,7,8,9].map( (elem) => (
      <Button key={"key-" + elem} val={elem} updateDisplay={this.updateDisplay} />
    ));
    ['0','+','-','*','/','='].forEach( (elem) => {
      buttonsArray.push(<Button key={"key-" + elem} val={elem} updateDisplay={this.updateDisplay} />);
    } );

    buttonsArray.push(<Button dataStyle="clear" key="key-C" val="C" updateDisplay={this.updateDisplay} />);

    return(
      <div>
        {buttonsArray}
      </div>
    );
  }
}

export default Panel;
