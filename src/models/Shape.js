import {extendObservable } from 'mobx';

const defaultSize = '100%';

export default class Shape {

  constructor({
      x = 0,
      y = 0,
      color = 'red',
      width = defaultSize,
      height = defaultSize
    }) {

    this.kind = 'Shape';

    extendObservable(this, {
      x: x,
      y: y,
      color: color,
      width: width,
      height: height,
      mode: 'Debug'
    });
  }

  move(x, y) {
    if(x) {
      this.x = x;
    }

    if(y) {
      this.y = y;
    }
  }

  resize(height, width) {
    if(height) {
      this.height = height;
    }

    if(width) {
      this.width = width;
    }
  }

}
