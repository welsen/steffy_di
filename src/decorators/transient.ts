import Injectable from './injectable';
import FACTORY_AS from '../enums/factory-as';

function Transient(identifier = null): ClassDecorator {
  return Injectable(identifier, FACTORY_AS.TRANSIENT);
}

export default Transient;
