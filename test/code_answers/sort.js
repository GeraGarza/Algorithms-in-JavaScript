export class Arr {
  constructor(...items) {
    this.arr = new Array(...items);
  }

  sort(compareFunction) {
    return this.arr.sort(compareFunction);
  }

  reverse() {
    return this.arr.reverse();
  }

  slice(start, end) {
    return this.arr.slice(start, end);
  }

  splice(start, ...params) {
    // params = deleteCount, ...items
    return this.arr.splice(start, ...params);
  }
}

export class Str {
  constructor(str) {
    this.str = new String(str);
  }

  split(separator, limit) {
    return this.str.split(separator, limit);
  }

  replace(regex_or_substr, substr_or_function) {}
}
