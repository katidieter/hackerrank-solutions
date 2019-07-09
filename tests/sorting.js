const Sorting = require('../functions/sorting');
const assert = require('assert');

describe('Bouble sorting', function() {
  it('Desc array', function() {
    const arr = [3,2,1]
    const result = Sorting.countSwaps(arr);
    assert.equal(result, 3);
  });

  it('Asc array', function() {
    const result = Sorting.countSwaps([1,2,3])
    assert.equal(result, 0);
  });

  it('Not sorting', function() {
    const result = Sorting.countSwaps([2,3,1]);
    assert.equal(result, 2);
  })
});
