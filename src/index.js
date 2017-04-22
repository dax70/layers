import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Document, Layer, Shape } from './models';

const yellowShape = new Shape({
  color: 'yellow',
  x: 100,
  y:100,
  width: 50,
  height: 50
});

const blueShape = new Shape({
  color: 'blue',
  x: 150,
  y: 150,
  width: 100,
  height: 100
});

const layer = new Layer();
layer.addShape(yellowShape);
layer.addShape(blueShape);

const doc = new Document();
doc.add(layer);
// doc.add(yellowShape);
// doc.add(blueShape);


ReactDOM.render(
  <App  document={doc}/>,
  document.getElementById('root')
);
