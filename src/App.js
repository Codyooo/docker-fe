/**
* @file: description
* @author: hufan
* @Date: 2020-02-07 17:11:13
* @LastEditors: hufan
* @LastEditTime: 2020-02-08 15:17:36
 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello.tsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Hello /> */}
        </div>
        <p className="App-intro">
          running in docker now!!
          auto build and deploy
        </p>
        <div>
          hey
        </div>
      </div>
    );
  }
}

export default App;
