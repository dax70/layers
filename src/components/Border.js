// @flow
import React, { Component } from 'react';
import Shape from './Shape';

export type BorderStyle =
  'none' |
  'hidden' |
  'dotted' |
  'dashed'|
  'solid' |
  'double' |
  'groove' |
  'ridge' |
  'inset' |
  'outset';


export type Props = {
  children: any,
  width: Number | String,
  color: String,
  style: BorderStyle
}

export default class Border extends Component {

  props: Props;

  static defaultProps = {
    width: '1px',
    style: 'solid',
    color: '000'
  }

  render() {
    const { color, width, style } = this.props;
    const styleToApply = {
      borderStyle: style,
      borderColor: color,
      borderWidth: width
    };

    return (
      <div style={ styleToApply }>
        { this.props.children }
      </div>
    )
  }
}
