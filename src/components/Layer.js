import React from 'react';
import { observer } from 'mobx-react';
import Shape, { computeStylesFromProps } from './Shape';

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
