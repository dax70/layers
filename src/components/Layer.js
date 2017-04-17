import React from 'react';
import Shape from './Shape';
import { toPixels } from '../utils/UnitConverter';

function computeStylesFromProps(componentProps) {
  const { color, x, y, width, height, opacity, position } = componentProps;

  let style = {
    backgroundColor: color,
    position: position,
    opacity: typeof opacity === 'number'? opacity/100: 1,
    left: toPixels(x),
    top: toPixels(y),
    width: width,
    height: height
  }

  return style;
}

export default class Layer extends Shape {

  static defaultProps = Object.assign({}, Shape.defaultProps, { width:'100vw', height:'100vh'});

  computeStyles() {
    const props = Object.assign({}, this.props, {color: 'transparent'});
    return computeStylesFromProps(props);
  }

  renderChildren() {
    return (
      <div style={{position:'relative'}} >
        { this.props.children }
      </div>
    );
  }
}
