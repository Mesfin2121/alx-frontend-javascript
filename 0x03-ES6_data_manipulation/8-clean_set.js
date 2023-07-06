export default function cleanSet(aSet, startString) {
  const resArray = [];
  let output = '';
  if (startString && typeof startString === 'string') {
    for (const set of aSet) {
      if (set && set.startsWith(startString)) {
        const temp = set.slice(startString.length);
        resArray.push(temp);
      }
    }
    output = resArray.join('-');
  }
  return output;
}
