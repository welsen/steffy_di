import Injectable from './injectable';
import FACTORY_AS from '../enums/factory-as';
import Identifier from '../types/identifier';

function Transient(identifier: Identifier<any> | null = null): ClassDecorator {
  return Injectable(identifier, FACTORY_AS.TRANSIENT);
}

export default Transient;
