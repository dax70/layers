import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Document, Layer, Shape } from './models';

const yellowShape = new Shape({
  color: 'yellow',
  width: 50,
  height: 50
});

const layer = new Layer();
layer.addShape(yellowShape);

const doc = new Document();
doc.add(layer);


ReactDOM.render(
  <App  document={doc}/>,
  document.getElementById('root')
);
