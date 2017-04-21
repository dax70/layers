import React from 'react';
import { observer } from 'mobx-react';
import Shape from './Shape';

function computeStylesFromProps(componentProps) {
  const { color, x, y, width, height, opacity, position } = componentProps;

  let style = {
    backgroundColor: color,
    position: position,
    opacity: typeof opacity === 'number'? opacity/100: 1,
    left: x,
    top: y,
    width: width,
    height: height
  }

  return style;
}

@observer
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
