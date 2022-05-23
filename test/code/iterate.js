export class Obj {
  constructor(obj) {
    this.obj = new Object(obj);
  }

  indexOf(searchElement, fromIndex = 0) {
   
    return -1;
  }

  lastIndexOf(searchElement, fromIndex = this.obj.length - 1) {
    
    return -1;
  }

  includes(searchElement, fromIndex = 0) {
    
    return false;
  }

  fill(value, start = 0, end = this.obj.length - 1) {

    return this.obj;
  }

  join(separator = ",") {
    let str = "";
    return str;
  }

  findIndex(callback) {
   
    return null;
  }

  find(callback) {
   
    return undefined;
  }

  filter(callback) {

    return obj;
  }

  forEach(callback) {
  
    return this.obj;
  }

  map(callback) {
 
    return obj;
  }

  some(callback) {
   
    return false;
  }

  every(callback) {
    
    return true;
  }

  reduce(callback, initialValue) {
    let accumulator = initialValue;

    return accumulator;
  }
}
