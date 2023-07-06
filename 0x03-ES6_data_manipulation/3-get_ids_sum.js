export default function getStudentIdsSum(array) {
  if (!Array.isArray(array)) return [];
  return array.reduce((preVal, currentVal) => preValue + currentVal.id, 0);
}
