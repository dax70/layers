// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools'
import { Document, ShapeEditor } from './components';
import './App.css';

@observer
export default class App extends Component {
  render() {
    const doc = this.props.document;

    return (
      <div className="App">
        <div>
          <div style={{float: 'right', zIndex:7000}}>
            <ShapeEditor shape={doc.selectedItem}/>
          </div>
        </div>
        <Document document={doc}/>
        <DevTools />
      </div>
    );
  }
}
