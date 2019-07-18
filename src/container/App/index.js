import React from 'react';
// import Button from '@material-ui/core/Button';
import styles from './styles';
import { withStyles } from '@material-ui/core'
import Task from './../Task';
import { ThemeProvider } from '@material-ui/styles';
import theme from './../../commons/Theme';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App" >
          <Task />
        </div>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);