/* @flow */

/* Probably should rename to CommonProps */
import React from 'react';

export type Unit = Number | String;

export type Visibility = 'visible' | 'hidden' | 'exclude';

export type ShapeMode = 'Normal' | 'Debug' | 'Draggable';

export type ShapeProps = {
  children?: any,
  color?: String,
  x: Unit,
  y: Number,
  width: Unit,
  height: Unit,
  opacity?: Number,
  position: Position,
  tag?: any,
  adornments: any,
  visible: Visibility,
  mode?: ShapeMode,
  onClick: Function
}

export type ShapeStyles = {
  color: String,
  textColor: String
}

export type ShapeKind = {

}
