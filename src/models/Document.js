import { extendObservable } from 'mobx';

export default class Document {

  constructor(items = []) {
    extendObservable(this, {
      items: items,
      selectedItem: null
    })
  }

  add(item) {
    this.items.push(item);
  }

}
