// Reverses a string

function reverseString(str) {
  let data = [];

  for (let i = 0; i < str.length; i++) {
    data.push(str.charAt(i));
  }

  return data.reverse().join("");
}

// Gets the sum of a 2d array
function sum2dArray(arr) {
  const data = arr.flat();
  let total = 0;

  for (let i = 0; i < data.length; i++) {
    total = total + Number(data[i]);
  }

  return total;
}

// Finds 2 numbers in an array that equal the sum
function twoSum(arr, sum) {
  let first = [];
  let second = [];

  for (let i = 0; i < arr.length; i++) {
    first.push(arr[i + 1]);
    second.push(arr[i + 1]);
  }

  for (let a = 1; a < first.length + 1; a++) {
    for (let b = 1; b < second.length + 1; b++) {
      if (a + b === sum) {
        return `${a}, ${b}`;
      }
    }
  }
}
