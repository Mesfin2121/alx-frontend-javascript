export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](validate) {
    if (validate === 'number') return this._size;
    if (validate === 'string') return this._location;
    return this;
  }
}
