
export type ShapeMode = 'Debug' | 'Normal' | 'Draggable';

export ShapeKind = {

}

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
  adorements: Adorment | Array<Adorment>,
  mode?: ShapeMode
}

export type Point = {
    x: Number,
    y: Number
}

export type Bounds = {
  width: Number,
  height: Number
}

export type ShapeStyles = {
  color: String,
  textColor: String
}
