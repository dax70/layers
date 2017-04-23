/* @flow */

/* Probably should rename to CommonProps */
import React from 'react';

export type Unit = number | string;

export type Visibility = 'visible' | 'hidden' | 'exclude';

export type ShapeMode = 'Normal' | 'Debug' | 'Draggable';

export type ShapeProps = {
  children?: any,
  color?: string,
  x: Unit,
  y: number,
  width: Unit,
  height: Unit,
  opacity?: number,
  position: Position,
  tag?: any,
  adornments: any,
  visible: Visibility,
  mode?: ShapeMode,
  onClick: Function
}

export type ShapeStyles = {
  color: string,
  textColor: string
}

export type ShapeKind = {

}
