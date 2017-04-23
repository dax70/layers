import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Document, Layer, Shape } from './models';

const blueishShape = new Shape({
  color: '#4A90E2',
  x: 100,
  y:100,
  width: 50,
  height: 50
});

const greenishShape = new Shape({
  color: '#B8E986',
  x: 250,
  y: 75,
  width: 100,
  height: 100
});

const layer = new Layer();
layer.addShape(blueishShape);
layer.addShape(greenishShape);

const doc = new Document();
doc.add(layer);

ReactDOM.render(
  <App document={doc}/>,
  document.getElementById('root')
);
