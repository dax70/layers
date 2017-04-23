/* @flow */
import * as ColorImp from 'color';

export type ColorHex = string;

export type ColorRGBA = {
  r: string,
  g: string,
  b: string,
  a: string,
}

export type ColorValue = ColorHex | ColorRGBA;

export default class Color {
  
  value: string;

  constructor(value: ColorValue) {
    if (typeof value == 'string') {
      this.value = ColorImp(value);
    }
    else if (value.r) {
      const { a, ...rgb } = value;
      this.value = ColorImp(rgb).alpha(a);
    }
  }

  toString() {
    this.value.toString();
  }

}
