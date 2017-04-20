// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import type { ShapeProps } from './CommonTypes';
import './Shape.css';

export type Position = 'static' | 'absolute' | 'relative' | 'fixed' | 'sticky';

const defaultSize = '100%';

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

  onClick: Function;

  constructor(props: ShapeProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  renderCore() {
    return this.props.children;
  }

  renderChildren() {
    const adornments = this.props.adornments;

    if(!adornments) {
      return this.renderCore();
    }

    // For debugging only
    console.log(`Adorments type is ${Array.isArray(adornments)? 'is Array': 'object'}`);

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

  onClick(e: SyntheticEvent) {
    e.preventDefault();
    const clickHandler = this.props.onClick;
    if(clickHandler) {
      clickHandler(this);
    }
  }

  render () {
    const computedStyle = this.computeStyles();
    const Tag = this.props.tag || 'div';

    return (
      <Tag onClick={this.onClick} style={computedStyle} className={ this.props.mode === 'Debug'? 'debug': null }>
        { this.renderChildren() }
      </Tag>
    );
  }
}
