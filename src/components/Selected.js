import React, { Component } from 'react';
import { css } from 'glamor';
import glamorous from 'glamorous';
import Shape from './Shape';

export default class Selectaed extends Shape {

  renderChildren() {

    return (
      <div>
        foo
        <div className="border">
        </div>
        <div className="top-left handle">
        </div>
        <div className="top-right handle">
        </div>
        <div className="bottom-left handle">
        </div>
        <div className="bottom-right handle">
        </div>
      </div>
    );
  }
}
