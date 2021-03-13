import Injectable from './injectable';
import FACTORY_AS from '../enums/factory-as';

function Scoped(identifier = null): ClassDecorator {
  return Injectable(identifier, FACTORY_AS.SCOPED);
}

export default Scoped;
