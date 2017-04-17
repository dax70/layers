import React, { Component } from 'react';
import glamorous from 'glamorous';

export default class Selectable extends Component {

  render() {
    const Box = glamorous.div({
      borderRadius: 5,
      borderColor: 'blue',
      borderWidth: '2px',
      borderStyle: 'solid'
    });

    return (
      <Box>
       { this.props.children }
      </Box>
    );
  }
}
