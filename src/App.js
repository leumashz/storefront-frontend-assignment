import React, { Component } from 'react';
import MainContainer from './components/MainContainer';
import Header from './components/Header';
import PrincipalMessage from './components/PrincipalMessage';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <PrincipalMessage />
        <MainContainer />
      </React.Fragment>
    );
  }
}

export default App;
