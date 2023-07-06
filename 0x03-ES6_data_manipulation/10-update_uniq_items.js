export default function updateUniqueItems(listMap) {
  if (!(listMap instanceof Map)) throw new Error('Cannot process');
  for (const [key, value] of listMap.entries()) {
    if (value === 1) {
      listMap.set(key, 100);
    } else listMap.set(key, value);
  }
  return listMap;
}i
