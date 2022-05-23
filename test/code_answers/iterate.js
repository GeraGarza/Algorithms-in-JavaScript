export class Obj {
  constructor(obj) {
    this.obj = new Object(obj);
  }

  indexOf(searchElement, fromIndex = 0) {
    for (let i = fromIndex; i < this.obj.length; i++) {
      if (this.obj[i] === searchElement) return i;
    }
    return -1;
  }

  lastIndexOf(searchElement, fromIndex = this.obj.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (this.obj[i] === searchElement) return i;
    }
    return -1;
  }

  includes(searchElement, fromIndex = 0) {
    let i = fromIndex;
    while (i < this.obj.length) {
      if (this.obj[i++] === searchElement) return true;
    }
    return false;
  }

  fill(value, start = 0, end = this.obj.length - 1) {
    let i = start;
    do this.obj[i++] = value;
    while (i <= end);
    return this.obj;
  }

  join(separator = ",") {
    let str = "";
    let i = 0;
    for (const value of this.obj) {
      ++i;
      str += value + (i < this.obj.length ? separator : "");
    }
    return str;
  }

  findIndex(callback) {
    for (const key in this.obj) {
      if (callback(this.obj[key], key)) return key;
    }
    return null;
  }

  find(callback) {
    for (const key in this.obj) {
      if (callback(this.obj[key], key)) return this.obj[key];
    }
    return undefined;
  }

  filter(callback) {
    const obj = {};
    for (const key in this.obj) {
      if (callback(this.obj[key], key)) obj[key] = this.obj[key];
    }
    return obj;
  }

  forEach(callback) {
    for (const key in this.obj) {
      this.obj[key] = callback(this.obj[key], key);
    }
    return this.obj;
  }

  map(callback) {
    const obj = {};
    for (const key in this.obj) {
      obj[key] = callback(this.obj[key], key);
    }
    return obj;
  }

  some(callback) {
    for (const key in this.obj) {
      if (callback(this.obj[key], key)) return true;
    }
    return false;
  }

  every(callback) {
    for (const key in this.obj) {
      if (callback(this.obj[key], key)) continue;
      return false;
    }
    return true;
  }

  reduce(callback, initialValue) {
    let accumulator = initialValue;
    for (const key in this.obj) {
      accumulator = callback(accumulator, this.obj[key], key);
    }
    return accumulator;
  }
}
