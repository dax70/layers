import React, { Component } from 'react';

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
        return null;
      }

      console.log(shape);

      return (
        <div>
          <div>Postion X: <input type="text" name="x" onChange={this.onChange} /></div>
          <div>Position Y: <input type="text" name="y" onChange={this.onChange} /></div>
          <div>Height: <input type="text" name="height" onChange={this.onChange} /></div>
          <div>Width: <input type="text" name="width" onChange={this.onChange} /></div>
        </div>
      )
  }
}
