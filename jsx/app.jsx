import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Calculator from './calculator.jsx';

ReactDOM.render(
  <MuiThemeProvider>
    <Calculator/>
  </MuiThemeProvider>,
  document.getElementById('root')
);
