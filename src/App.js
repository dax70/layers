// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Document, Layer, Selectable, Shape, Text, Border, ShapeEditor } from './components';
import './App.css';

class App extends Component {
  render() {
    const doc = this.props.document;

    return (
      <div className="App">
        <div>
          <div style={{position: 'fixed', top: 30, right: 10, zIndex:7000}}>
            <ShapeEditor shape={doc.selectedItem}/>
          </div>
        </div>
        <Document document={doc}/>
      </div>
    );
  }
}

export default observer(App);
