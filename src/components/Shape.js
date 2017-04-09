// @flow
import React, { Component } from 'react';
import type { ShapeProps } from './CommonTypes';
import { toPixels } from '../utils/UnitConverter';
import './Shape.css';

export type Position = 'static' | 'absolute' | 'relative' | 'fixed' | 'sticky';

const defaultSize = '100%';

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

export default class Shape extends Component {

  props: ShapeProps;

  static defaultProps = {
    x: 0,
    y: 0,
    position: 'absolute',
    width: defaultSize,
    height: defaultSize,
    tag: 'div',
    mode: 'Debug'
  };

  renderCore() {
    return this.props.children;
  }

  renderAdornments() {
    const adornments = this.props.adornments;

    if(!adornments) {
      return this.renderCore();
    }

    const innerStyle = {
      backgroundColor: this.props.color,
      height: '100%'
    }

    const innerWrap = (
      <div key="inner" data-inner style={innerStyle}>
        { this.renderCore()}
      </div>
    );

    const adornmentProps = adornments.props;

    const children = adornmentProps.children? [adornmentProps.children, innerWrap]: [innerWrap];

    return React.cloneElement(adornments, adornments.props, children);
  }

  computeStyles() {
    return computeStylesFromProps(this.props);
  }

  render () {
    const computedStyle = this.computeStyles();
    const Tag = this.props.tag;

    return (
      <Tag style={computedStyle} className={ this.props.mode === 'Debug'? 'debug': null }>
        { this.renderAdornments() }
      </Tag>
    );
  }
}
