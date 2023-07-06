export default function hasValuesFromArray(aSet, array) {
  return array.reduce((pre, cur) => pre && aSet.has(cur), true);
}
