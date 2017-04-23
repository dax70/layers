import React from 'react';
import { css } from 'glamor';
import Shape, { computeStylesFromProps }  from './Shape';

const handleStyle = css({
  backgroundColor: '#fff',
  border: '1px solid #bbb',
  boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.2)'
});

const border = css({
  border: '1px solid #bbb',
  margin: '3px',
  width: 'calc(100% - 7px)',
  height: 'calc(100% - 7px)'
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

export default class Selectaed extends Shape {

  computeStyles() {
    const prevProps = this.props;
    const newProps = {
      x: prevProps.x -4,
      y: prevProps.y -4,
      width: prevProps.width +9,
      height: prevProps.height +9
    };
    const props = Object.assign({}, prevProps, newProps);
    const baseCss = computeStylesFromProps(props);
    const selected = css({
      fontWeight: 'bolder'
    });

    return css(baseCss, selected);
  }

  renderChildren() {


    return (
      <div style={{ width: '100%', height: '100%'}}>
        <div {...border}>
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
