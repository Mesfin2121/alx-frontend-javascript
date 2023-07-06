export default function createInt8TypedArray(length, position, value) {
  const bArray = new ArrayBuffer(length);
  const dView = new DataView(bArray);

  try {
    dView.setInt8(position, value);
  } catch (err) {
    throw Error('Position outside range');
  }

  return dView;
}
