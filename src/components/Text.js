import React from 'react';
import Shape from './Shape';

const Tag = 'p';

export default class Text extends Shape {

  static defaultProps = {
    x:0,
    y:0,
    position: 'relative'
  }

  computeStyles() {
    let style = super.computeStyles();
    const textColor = this.props.textColor;

    if(textColor) {
      style.color = textColor;
    }
    return style;
  }

  renderCore(style: any) {
    return (
      <Tag style={style} className={ this.props.mode == 'Debug'? 'debug': null}>
        { this.props.text }
      </Tag>
    )
  }
}
