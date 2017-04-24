import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Draggable from 'react-draggable';
import Selected from './Selected';

@observer
export default class ShadowShape extends Component {
  onDragStart: Function;
  onDrag: Function;
  onDragStop: Function;

  constructor(props) {
      super(props);
      this.onDragStart = this.onDragStart.bind(this);
      this.onDrag = this.onDrag.bind(this);
      this.onDragStop = this.onDragStop.bind(this);
  }

  onDragStart(e, data) {
    const onDragStart = this.props.onDragStart;
    if(onDragStart) {
      onDragStart(e, data);
    }
  }

  onDrag(e, data) {
    const onDrag = this.props.onDrag;
    if(onDrag) {
      onDrag(e, data);
    }
  }

  onDragStop(e, data) {
    const onDragStop = this.props.onDragStop;
    if(onDragStop) {
      onDragStop(e, data);
    }
  }

  render() {
    const shape = this.props.shape;
    const { x, y, height, width, isSelected } = shape;

    return (
      <Draggable position={{x, y}}
        onStart={this.onDragStart}
        onDrag={this.onDrag}
        onStop={this.onDragStop}>
        <div>
          <Selected x={x} y={y}
                height={height} width={width}
                isSelected={isSelected} objRef={shape}/>
        </div>
      </Draggable>
    )
  }
}