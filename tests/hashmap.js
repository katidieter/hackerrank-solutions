const Hashmap = require('../functions/hashmap');
const assert = require('assert');
const {performance} = require('perf_hooks');

describe('Hashmap', function() {
  it('Has all words in magazine', function() {
    const magazine = 'give me one grand today night'.split(' ');
    const note = 'give one grand today'.split(' ');
    const result = Hashmap.checkMagazine(magazine, note);
    assert.equal(result, 'Yes');
  });

  it('Has the word, but it was used before', function() {
    const magazine = 'two times three is not four'.split(' ');
    const note = 'two times two is four'.split(' ');
    const result = Hashmap.checkMagazine(magazine, note);
    assert.equal(result, 'No');
  });

  it('Has not an word', function() {
    const magazine = 'ive got a lovely bunch of coconuts'.split(' ');
    const note = 'ive got some coconuts'.split(' ');
    const result = Hashmap.checkMagazine(magazine, note);
    assert.equal(result, 'No');
  });
});