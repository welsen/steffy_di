import MetadataResolver from '../metadata-resolver';

export default function Override(target: Function) {
  return MetadataResolver.setToOverride(target);
}
