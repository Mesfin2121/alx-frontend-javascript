export default function createIteratorObject(report) {
  const conArr = [];
  for (const arr of Object.values(report)) {
    conArr.push(arr);
  }
  return conArr;
}
