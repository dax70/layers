import { extendObservable } from 'mobx';
import Shape from './Shape';

export default class Layer extends Shape {
  constructor() {
    super({ x: 0, y: 0 });
    this.kind = 'Layer';

    extendObservable(this, {
      shapes: []
    });
  }

  addShape(shape) {
    this.shapes.push(shape);
  }

}
