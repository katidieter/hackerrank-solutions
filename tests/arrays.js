const Arrays = require('../functions/arrays');
const assert = require('assert');
const {performance} = require('perf_hooks');

describe('Hour glass sum', function() {
  it('All positive numbers', function() {
    const arr = [[1,1,1,0,0,0]];
    arr.push([0,1,0,0,0,0]);
    arr.push([1,1,1,0,0,0]);
    arr.push([0,0,2,4,4,0]);
    arr.push([0,0,0,2,0,0]);
    arr.push([0,0,1,2,4,0]);
    const result = Arrays.hourGlassSum(arr);
    assert.equal(result, 19);
  });

  it('Negative and positive numbers', function() {
    const arr = [[1,1,1,0,0,0]]
    arr.push([0,1,0,0,0,0])
    arr.push([1,1,1,0,0,0])
    arr.push([0,9,2,-4,-4,0])
    arr.push([0,0,0,-2,0,0])
    arr.push([0,0,-1,-2,-4,0])
    const result = Arrays.hourGlassSum(arr);
    assert.equal(result, 13);      
  });

  it('All negative numbers', function() {
    const arr = [[-1,-1,0,-9,-2,-2]]
    arr.push([-2,-1,-6,-8,-2,-5])
    arr.push([-1,-1,-1,-2,-3,-4])
    arr.push([-1,-9,-2,-4,-4,-5])
    arr.push([-7,-3,-3,-2,-9,-9])
    arr.push([-1,-3,-1,-2,-4,-5])
    const result = Arrays.hourGlassSum(arr)
    assert.equal(result, -6);
  })
});

describe('Minimum swaps to sort array', function() {
 it('4 3 1 2', function () {
    const result = Arrays.minimumSwaps([4,3,1,2])
    assert.equal(result, 3);
  });
  it('2 3 4 1 5', function() {
    const result = Arrays.minimumSwaps([2,3,4,1,5])
    assert.equal(result, 3)
  });
  it('1 3 5 2 4 6 7', function() {
    const result = Arrays.minimumSwaps([1,3,5,2,4,6,7])
    assert.equal(result, 3)
  });
});

describe('Rotation left', function() {
  it('Sequencial numbers', function() {
    const result = Arrays.rotLeft([1,2,3,4,5], 4).toString();
    assert.equal(result, '5,1,2,3,4');
  });
  it('Unsequencial numbers', function() {
    const result = Arrays.rotLeft(
      [33,47,70,37,8,53,13,93,71,72,51,100,60,87,97], 13
    ).toString();
    assert.equal(result, '87,97,33,47,70,37,8,53,13,93,71,72,51,100,60');
  })
})
