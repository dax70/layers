// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';

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
  thickness: Number | String,
  color: String,
  style: BorderStyle
}

@observer
export default class Border extends Component {

  props: Props;

  static defaultProps = {
    thickness: '1px',
    style: 'solid',
    color: '#000'
  }

  render() {
    const { color, thickness } = this.props;
    const styleToApply = {
      backgroundColor: color,
      height: '100%',
      padding: thickness
    };

    return (
      <div style={ styleToApply }>
        { this.props.children }
      </div>
    )
  }
}
