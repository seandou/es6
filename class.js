'use strict';

/**
 * References
 * http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
 */
class Point {
  constructor(x, y) {
    // ...
  }

  toString() {
    // ...
  }
}

let propertyNames = Object.getOwnPropertyNames(Point.prototype);
console.log(propertyNames);
