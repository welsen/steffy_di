import Injectable from './injectable';

function Singleton(identifier = null): ClassDecorator {
  return Injectable(identifier);
}

export default Singleton;
