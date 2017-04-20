/* @flow */
import { observable, action } from 'mobx';
import Shape from './Shape';

export default class Document {
  @observable items: Array<Shape>;
  @observable selectedItem: ?Shape;

  constructor(items: Array<Shape> = []) {
    this.items = items;
  }

  add(item: Shape) {
    this.items.push(item);
  }

  @action selectItem(item: Shape) {
    this.selectedItem = item;
  }

  @action deselectItem() {
    this.selectedItem = null;
  }
}
