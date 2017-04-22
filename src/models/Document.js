/* @flow */
import { observable, action } from 'mobx';
import Shape from './Shape';
import Layer from './Layer';

export default class Document {
  defaultLayer: Layer;
  @observable items: Array<Shape>;
  @observable selectedItem: ?Shape;

  constructor(items: Array<Shape> = []) {
    this.items = items;
  }

  add(item: Shape) {
    if(!this.defaultLayer) {
        this.defaultLayer = new Layer();
        this.items.push(this.defaultLayer);
    }

    // Exit early if layer otherwise add to defaultLayer
    if(item.kind = 'Layer') {
      this.items.push(item);
      return;
    }

    this.defaultLayer.addShape(item);
  }

  getSelectedItem(): ?Shape {
    return this.selectedItem;
  }

  @action selectItem(item: Shape) {
    if(this.selectedItem) {
      this.selectedItem.isSelected = false;
    }

    // When shadow layer gets selected and does not pass objRef
    if(item) {
      item.isSelected = true;
    }

    this.selectedItem = item;
  }

  @action deselectItem() {
    if(!this.selectedItem) {
      return;
    }

    this.selectedItem.isSelected = false;
    this.selectedItem = null;
  }
}
