import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Shape from './Shape';
import Layer from './Layer';
import ShadowShape from './ShadowShape';
import IdGenerator from '../utils/IdGenerator';

// const dragLogger = (e: MouseEvent, data: Object) => {
  // console.log('Event: ', event);
  // console.log('Data: ', data);
// };

@observer
export default class Document extends Component {
  constructor(props) {
    super(props);
    this.onSelectItem = this.onSelectItem.bind(this);
    this.onDeselectItem = this.onDeselectItem.bind(this);
  }

  onSelectItem(e, component) {
    e.stopPropagation();
    // e.preventDefault();
    const doc = this.props.document;
    doc.selectItem(component.props.objRef);
    console.log(doc.getSelectedItem());
  }

  onDeselectItem() {
    const doc = this.props.document;
    doc.deselectItem();
  }

  handleDrag = (e, data) => {
    const shape = this.props.document.getSelectedItem();
    const { x, y } = data;
    shape.move(x, y);
  }

  renderShadowComponent(shape) {
    const { x, y, height, width, isSelected } = shape;
    if(shape.isSelected) {
        return (
          <ShadowShape key={IdGenerator()()}
            shape={shape}
            onDrag={this.handleDrag} />
        )
    }

    return (
        <Shape key={IdGenerator()()} x={x} y={y}
                height={height} width={width}
                isSelected={isSelected} objRef={shape}
                onClick={this.onSelectItem} />
    );
  }

  render() {
    const document = this.props.document;
    const items = document.items;

    const shadowChildren = [];

    const renderTree: Array<Shape> = items.map((item, i) => {

      switch (item.kind) {
        case 'Layer':
          return (
            <Layer key={IdGenerator()()} {...item} objRef={item} >
            {
              item.shapes.map((shape, i) => {
                shadowChildren.push(this.renderShadowComponent(shape));
                return <Shape key={i} {...shape} objRef={shape} />
              })
            }
            </Layer>
          );
        default:
          throw new Error(`Type '${item.kind}' not supported.`);
      }
    });

    const shadowLayer = (
      <Layer key={IdGenerator()()} onClick={this.onSelectItem}>
        { shadowChildren }
      </Layer>
    );

    renderTree.push(shadowLayer);

    return (
      <div>
        { /* Shadow DOM layer */}
        { renderTree }
      </div>
    );
  }
}
