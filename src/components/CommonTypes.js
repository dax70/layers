/* Probably should rename to CommonProps */
import React from 'react';
// @flow

export type ShapeProps = {
  children?: any,
  color?: String,
  x: Number,
  y: Number,
  width: Number| String,
  height: Number| String,
  opacity?: Number,
  position: Position,
  tag?: any,
  adornments: ReactElement,
  mode?: ShapeMode
}

export type ShapeStyles = {
  color: String,
  textColor: String
}

export type ShapeMode = 'Debug' | 'Normal' | 'Draggable';

export type ShapeKind = {

}
