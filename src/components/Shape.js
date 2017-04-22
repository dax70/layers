// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { css } from 'glamor';
import type { ShapeProps } from './CommonTypes';
import './Shape.css';

export type Position = 'static' | 'absolute' | 'relative' | 'fixed' | 'sticky';

const defaultSize = '100%';

export function computeStylesFromProps(componentProps) {
  const { color: backgroundColor, x: left, y: top, width, height, opacity, position } = componentProps;

  let style = css({
    backgroundColor,
    position,
    opacity: typeof opacity === 'number'? opacity/100: 1,
    left,
    top,
    width,
    height
  })

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
    return computeStylesFromProps(this.props);
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
