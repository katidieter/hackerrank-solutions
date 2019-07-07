class Arrays {
  //https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
  hourGlassSum(arr) {
    let maxSum = Number.MIN_VALUE;
    for (let i = 0; i < arr.length - 2; i++) {
      for (let j = 0; j < arr[i].length - 2; j++) {
        let sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
          + arr[i + 1][j + 1]
          + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

        if (sum < 0 && maxSum === Number.MIN_VALUE) {
          maxSum = Math.min(maxSum, sum)
        } else {
          maxSum = Math.max(maxSum, sum);
        }
      }
    }
    return maxSum;
  }

  //https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
  minimumSwaps(arr) {
    let firstSwap;
    let swaps = 0;
    let arraySize = arr.length;

    for (let i = 0; i < arraySize; i++) {
      if (arr[i] !== i + 1) {
        for (let j = i + 1; j < arraySize; j++) {
          if (arr[j] === i + 1) {
            firstSwap = arr[i];
            arr[i] = arr[j];
            arr[j] = firstSwap;
            swaps += 1;
          }
        }
      }
    }
    return swaps;
  }

  //https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
  rotLeft(arr, rotations) {
    let arrayLength = arr.length;
    let fistElement = rotations % arrayLength;
    let result = [];
    for (let i = 0; i < arrayLength; i++) {
      result[i] = arr[(i + fistElement) % arrayLength];
    }
    return result;
  }
}

module.exports = new Arrays();