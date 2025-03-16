export class Series {
  constructor(str) {
    if (str.length === 0) {
      throw new Error("series cannot be empty");
    }
    this.str = str;
  }

  slices(sliceLength) {
    if (sliceLength > this.str.length) {
      throw new Error("slice length cannot be greater than series length");}
    if (sliceLength === 0) {
      throw new Error("slice length cannot be zero");}
    if (sliceLength < 0) {
      throw new Error("slice length cannot be negative");}
    let result = [];
    for (let i = 0; i <= this.str.length - sliceLength; i++) {
      result.push(
        this.str.slice(i, i + sliceLength).split('').map(Number)
      );
    }

    return result;
  }
}