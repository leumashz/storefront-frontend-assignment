import React, { Component } from 'react';
import MainContainer from './components/MainContainer';
import Header from './components/Header';
import PrincipalMessage from './components/PrincipalMessage';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="main-page-container">
        <Header />
        <PrincipalMessage />
        <MainContainer />
      </div>
    );
  }
}

export default App;
