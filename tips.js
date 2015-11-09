'use strict';

/**
 * arguments
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
 */
function myConcat(separator) {
  var args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}

// returns "red, orange, blue"
console.log(myConcat(", ", "red", "orange", "blue"));

// returns "elephant; giraffe; lion; cheetah"
console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));

// returns "sage. basil. oregano. pepper. parsley"
console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
