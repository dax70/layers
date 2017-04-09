// @flow

import React, { Component } from 'react';
import './App.css';
import { Shape, Text, Border } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Shape key={1} x="10" y="10" width="100px" height="100px"
                  color="red"
                  adornments={<Border thickness="5px"/>}
                  >
              <Text text="hello world" textColor="blue"/>
          </Shape>
          <Shape key={2} x="150" y="10" width="100px" height="100px"
                  color="blue">
              <Text text="hello world" />
          </Shape>

          <Shape key={3} x="300" y="10" width="100px" height="100px"
                  color="green"
                  adornments={
                    <Border thickness="2px" color="yellow">
                      <Border thickness="3px" color="blue"/>
                    </Border>
                    }
                  >
              <Text text="hello world" textColor="blue"/>
          </Shape>
      </div>
    );
  }
}

export default App;
