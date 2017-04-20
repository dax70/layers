import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class ShapeEditor extends Component {

  constructor(props) {
    super(props);
    this.updateProperty = this.updateProperty.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  updateProperty (key, value) {
    this.props.shape[key] = value
  }

  onChange (event) {
    this.updateProperty(event.target.name, event.target.value)
  }

  render() {
      const {shape} = this.props;
      if(!shape) {
        return <div>No Shape Selected</div>;
      }


      return (
        <div>
          <div>Postion X: <input type="text" name="x" value={shape.x} onChange={this.onChange} /></div>
          <div>Position Y: <input type="text" name="y" value={shape.y} onChange={this.onChange} /></div>
          <div>Height: <input type="text" name="height" value={shape.height} onChange={this.onChange} /></div>
          <div>Width: <input type="text" name="width" value={shape.width} onChange={this.onChange} /></div>
        </div>
      )
  }
}
