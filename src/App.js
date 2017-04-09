// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Shape, Text, Border } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Shape  x="10" y="10" width="100px" height="100px" color="red">
            <Border width="5px">          
              <Text text="hello world" textColor="blue"/>
            </Border>
          </Shape>
      </div>
    );
  }
}

export default App;
