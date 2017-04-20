/* @flow */

export type Unit = number | string;

export type Color = {
  value: string;
};

export type Point = {
    x: Unit,
    y: Unit
}

export type Bounds = {
  width: Unit,
  height: Unit
}

export type Dimensions =  Point & Bounds;

export type ShapeProps =  Dimensions & {
  color: string;
};

export type Rect = Bounds & {
  top: number,
  left: number,
  bottom: number,
  right: number,
};
