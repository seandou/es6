"use strict"
// http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html

class Point {
  constructor(x, y) {
    // ...
  }

  toString() {
    // ...
  }
}

console.log(Object.getOwnPropertyNames(Point.prototype))
