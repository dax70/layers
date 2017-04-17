import Shape from './Shape';

export default class Text extends Shape {

  static defaultProps = {
    x:0,
    y:0,
    tag: 'span'
  }

  computeStyles() {
    let style = super.computeStyles();
    const textColor = this.props.textColor;

    if(textColor) {
      style.color = textColor;
    }

    return style;
  }

  renderCore() {
    return this.props.text;
  }
}
