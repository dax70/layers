import { observer } from 'mobx-react';
import Shape from './Shape';

@observer
export default class Layer extends Shape {

  static defaultProps = {
    ...Shape.defaultProps,
    position: 'absolute',
    width:'100vw',
    height:'100vh'
  };
}
