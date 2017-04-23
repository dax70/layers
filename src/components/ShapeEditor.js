/* @flow */
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Color from 'color';
import { SketchPicker } from 'react-color';

type State = {
  showColorPicker: boolean
}

@observer
export default class ShapeEditor extends Component {

  updateProperty: Function;
  onChange: Function;
  handleChange: Function;
  toggleColorPicker: Function;
  noOpColorInput: Function;
  state: State;

  constructor(props: any) {
    super(props);
    this.updateProperty = this.updateProperty.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleColorPicker = this.toggleColorPicker.bind(this);
    this.noOpColorInput = this.noOpColorInput.bind(this);
    this.state = { showColorPicker: false };
  }

  updateProperty (key: string, value: string) {
    this.props.shape[key] = value
  }

  onChange (event: SyntheticEvent) {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      this.updateProperty(target.name, target.value)
    }
  }

  handleChange(color: any, event: SyntheticEvent) {
    // color = {
    //   hex: '#333',
    //   rgb: {
    //     r: 51,
    //     g: 51,
    //     b: 51,
    //     a: 1,
    //   },
    //   hsl: {
    //     h: 0,
    //     s: 0,
    //     l: .20,
    //     a: 1,
    //   },
    // }

    const { shape } = this.props;

    if(!shape) {
      return ;
    }

    // Have to separate alpha since Color construtor only supports rgb
    const { a, ...rgb } = color.rgb;
    const rgba = Color(rgb).alpha(a);

    shape.color = rgba.toString();
  }

  toggleColorPicker(event: SyntheticEvent) {
    event.preventDefault();
    this.setState({ showColorPicker: !this.state.showColorPicker});
  }

  noOpColorInput(event: SyntheticEvent) {
    event.preventDefault();
  }

  render() {
      const {shape} = this.props;
      if(!shape) {
        return <div>No Shape Selected</div>;
      }

      return (
        <div>
          {/* Position Properties */}
          <div>
            <div>Postion X: <input type="text" name="x" value={shape.x} onChange={this.onChange} /></div>
            <div>Position Y: <input type="text" name="y" value={shape.y} onChange={this.onChange} /></div>
            <div>Height: <input type="text" name="height" value={shape.height} onChange={this.onChange} /></div>
            <div>
              <label>Width:</label>
              <input type="text" name="width" value={shape.width} onChange={this.onChange} />
            </div>
            {/* Color Editor */}
            <div>
              <label htmlFor="color">Color</label>:
              <input type="color" name="color" value={shape.color}
                      onChange={this.noOpColorInput} onClick={this.toggleColorPicker}/>
              <div style={{display: this.state.showColorPicker? 'block' : 'none'}}>
                <SketchPicker color={shape.color} onChange={ this.handleChange }/>
              </div>
            </div>
          </div>
        </div>
      )
  }
}
