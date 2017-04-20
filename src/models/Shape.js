/* @flow */
import { observable } from 'mobx';
import type { Unit, ShapeProps } from '../types';
import IdGenerator from '../utils/IdGenerator';

const defaultSize = '100%';

const defaultValues = {
  x: 0,
  y: 0,
  width: defaultSize,
  height: defaultSize,
  color: 'red'
};

export default class Shape {
  id: number;
  kind: string = 'Shape';
  @observable x: Unit = 0;
  @observable y: Unit = 0;
  @observable color: string = 'red';
  @observable width: Unit = defaultSize;
  @observable height: Unit = defaultSize;
  @observable mode:string = 'Debug';

  constructor(props: ShapeProps = defaultValues) {
    const { x, y, color, width, height } = props;
    this.x = x || 0;
    this.y = y || 0;
    this.color = color;
    this.width = width;
    this.height = height;
    this.id = IdGenerator();
  }

  move(x: number, y: number): void {
    if(x) {
      this.x = x;
    }

    if(y) {
      this.y = y;
    }
  }

  resize(height: number, width: number): void {
    if(height) {
      this.height = height;
    }

    if(width) {
      this.width = width;
    }
  }

}
