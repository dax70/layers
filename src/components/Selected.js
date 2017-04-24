import React from 'react';
import { css, style } from 'glamor';
import Shape, { computeStylesFromProps }  from './Shape';

const handleStyle = css({
  backgroundColor: '#fff',
  border: '1px solid #bbb',
  boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.2)'
});

const border = style({
  border: '1px solid #bbb'
});

const topLeft = css({
  position: 'absolute',
  left: 0,
  top: 0,
  width: 9,
  height: 9
});

const topRight = css({
  position: 'absolute',
  right: 0,
  top: 0,
  width: 9,
  height: 9
});

const bottomLeft = css({
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: 9,
  height: 9
});

const bottomRight = css({
  position: 'absolute',
  right: 0,
  bottom: 0,
  width: 9,
  height: 9
});

export default class Selected extends Shape {

  computeStyles() {
    const prevProps = this.props;
    const newProps = {
      x: prevProps.x -4,
      y: prevProps.y -4,
      width: prevProps.width +9,
      height: prevProps.height +9
    };
    const props = Object.assign({}, prevProps, newProps);
    return computeStylesFromProps(props);
  }

  renderChildren() {
    // const { width, height } = this.props;
    // const style = { top: 3, left: 3, width: width + 2, height: height + 2}
    return (
      <div style={{ width: '100%', height: '100%'}}>
        <div {...border} >
        </div>
        <div {...css(topLeft, handleStyle)}>
        </div>
        <div {...css(topRight, handleStyle)}>
        </div>
        <div {...css(bottomLeft, handleStyle)}>
        </div>
        <div {...css(bottomRight, handleStyle)}>
        </div>
      </div>
    );
  }
}
