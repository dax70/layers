import React from 'react';
import { observer } from 'mobx-react';
import { css, style } from 'glamor';
import Shape, { computeStylesFromProps }  from './Shape';

const handleStyle = css({
  backgroundColor: '#fff',
  border: '1px solid #bbb',
  boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.2)'
});

const border = style({
  border: '1px solid #bbb',
  transform: 'translate(3px,3px)'
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

@observer
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

    const { x, y } = newProps;
    const injectStyle = () => ({transform: `translate(${x}px,${y}px)`});
    return computeStylesFromProps(props, injectStyle);
  }

  renderChildren() {
    const { width, height } = this.props;
    return (
      <div style={{ width: '100%', height: '100%'}}>
        <div {...border} style={{ width:width +2, height: height +2 }}>
        </div>
        <div {...css(topLeft, handleStyle)}>
        </div>
        <div {...css(topRight, handleStyle)}>
        </div>
        <div {...css(bottomLeft, handleStyle)}>
        </div>
        <div {...css(bottomRight, handleStyle)}>
        </div>
        { this.renderCore() }
      </div>
    );
  }
}
