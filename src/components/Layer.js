import { observer } from 'mobx-react';
import Shape, { computeStylesFromProps } from './Shape';

@observer
export default class Layer extends Shape {

  static defaultProps = Object.assign({}, Shape.defaultProps, { width:'100vw', height:'100vh'});

  computeStyles() {
    const { x, y } = this.props;
    const props = Object.assign({}, this.props, {color: 'transparent'});
    const injectStyle = ()=> ({ position: 'absolute', top: x, left: y });
    return computeStylesFromProps(props, injectStyle);
  }
}
