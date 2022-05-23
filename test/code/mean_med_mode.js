export class Stats {
  constructor(array) {
    this.array = array;
  }

  static round(value, round = 2) {
    return Math.round(value * Math.pow(10, round)) / Math.pow(10, round);
  }

  mean() {
    return 0;
  }

  median() {
    return 0;
  }

  mode() {
    let modes = [];

    return modes;
  }
}
