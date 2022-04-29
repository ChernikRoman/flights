export default function checkUndefined(prop) {
  return prop === undefined ? '' : prop.caption;
}