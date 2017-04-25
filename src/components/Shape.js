// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import type { ShapeProps } from './CommonTypes';
import './Shape.css';

function translateStyle(x,y) {
  return { transform: `translate(${x}px,${y}px)` };
}

const defaultSize = '100%';

export function computeStylesFromProps(componentProps: ShapeProps) {
  const { x, y, color: backgroundColor, width, height, opacity, position } = componentProps;

  let condStyle;

  switch (position) {
    case 'absolute':
      condStyle = { position: 'absolute', top: x, left: y};
      break;
    case 'relative':
      condStyle = { position: 'relative', top: x, left: y};
      break;
    case 'translate':
      condStyle = translateStyle(x, y);
      break;
    default:
      throw new Error(`position ${position} is not a supported value.`);
  }

  let style = {
    backgroundColor,
    opacity: typeof opacity === 'number'? opacity/100: 1,
    width,
    height,
    ...condStyle
  }

  return {style};
}

@observer
export default class Shape extends Component {

  props: ShapeProps;

  static defaultProps = {
    x: 0,
    y: 0,
    position: 'translate',
    width: defaultSize,
    height: defaultSize,
    tag: 'div'
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

    // Plain render of children unless wrapping is neeed.
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
    return computeStylesFromProps(this.props, null);
  }

  onClick(e: SyntheticEvent) {
    const clickHandler = this.props.onClick;
    if(clickHandler) {
      clickHandler(e, this);
    }
  }

  render () {
    const computedStyle = this.computeStyles();
    const Tag = this.props.tag || 'div';


    return (
      <Tag onClick={this.onClick} {...computedStyle}>
        { this.renderChildren() }
      </Tag>
    );
  }
}
