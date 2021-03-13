import Identifier from '../types/identifier';
import Injectable from './injectable';

function Singleton(identifier: Identifier<any> | null = null): ClassDecorator {
  return Injectable(identifier);
}

export default Singleton;
