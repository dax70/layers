import React, { Component } from 'react';
import Layer from './Layer';
import Shape from './Shape';

export default class Document extends Component {
  constructor(props) {
    super(props);
    this.onSelectItem = this.onSelectItem.bind(this);
  }

  onSelectItem(component) {
    console.log(component);
    const doc = this.props.document;
    doc.selectedItem = component.props.objRef;
    console.log(doc.selectedItem);
  }

  render() {
    const document = this.props.document;
    const items = document.items;
    const selectedItem = document.selectedItem;
    console.log(selectedItem);

    const renderTree = items.map((item, i) => {
      // const Tag = item.kind;
      // return <Tag key={i} {...item} />

      switch (item.kind) {
        case 'Layer':
          return (
            <Layer key={i} {...item}>
            {
              item.shapes.map((shape, i) => {
                return <Shape key={i} {...shape} objRef={shape} onClick={this.onSelectItem}/>
              })
            }
            </Layer>
          );
        case 'Shape':
          return <Shape key={i} {...item} objRef={item} onClick={this.onSelectItem}/>
        default:
          throw new Error(`Type '${item.kind}' not supported.`);
      }
    });

    return (
      <div style={{position: 'relative'}}>
        { renderTree }
      </div>
    );
  }
}
