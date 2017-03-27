// @flow
import React, { Component } from 'react';
import { toPixels } from '../utils/UnitConverter';
import './Shape.css';

type ShapeMode = 'Debug' | 'Normal' | 'Draggable';

export type Position = 'static' | 'absolute' | 'relative' | 'fixed' | 'sticky';

type Props = {
  children?: any,
  color?: String,
  x: Number,
  y: Number,
  width: Number| String,
  height: Number| String,
  opacity?: Number,
  position: Position,
  tag?: any,
  mode?: ShapeMode
}

const defaultSize = '100%';

function computeStylesFromProps(componentProps) {
  const { color, x, y, width, height, mode, opacity, position } = componentProps;

  let style = {
    backgroundColor: color,
    position: position,
    opacity: typeof opacity == 'number'? opacity/100: 1,
    left: toPixels(x),
    top: toPixels(y),
    width: width,
    height: height
  }

  return style;
}

export default class Shape extends Component {

  props: Props;

  static defaultProps = {
    x: 0,
    y: 0,
    position: 'absolute',
    width: defaultSize,
    height: defaultSize,
    tag: 'div',
    mode: 'Debug'
  };

  renderCore(style:any) {
    const Tag = this.props.tag;

    return (
      // $FlowFixMe
      <Tag style={style} className={ this.props.mode == 'Debug'? 'debug': null}>
        { this.props.children }
      </Tag>
    )
  }

  computeStyles() {
    return computeStylesFromProps(this.props);
  }

  render () {
    const computedStyle = this.computeStyles();
    return this.renderCore(computedStyle);
  }
}
