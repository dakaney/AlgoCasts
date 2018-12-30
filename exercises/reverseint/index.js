// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let arr = JSON.stringify(n).split('');
    let neg = false;
    let result = '';
    if (arr[0] === '-') {
      neg = true;
      arr.shift();
    }
    for (let i of arr) {
      result = i + result;
    }
    result = Number(result);
    if (neg) {
      result *= -1;
    }
    return result;
  }

module.exports = reverseInt;
