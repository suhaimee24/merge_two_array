const math = require('./merge')

describe('test merge function', () => {
  test('merges [1,3,5] with [2,4,6] to equal [1,2,3,4,5,6]', () => {
    expect(math.merge([1,3,5], [2,4,6])).toStrictEqual([1,2,3,4,5,6]);
  });

  test('merges [1,3,5] with [] to equal [1,3,5]', () => {
    expect(math.merge([1,3,5], [])).toStrictEqual([1,3,5]);
  });

  test('merges [] with [2,4,6] to equal [2,4,6]', () => {
    expect(math.merge([], [2,4,6])).toStrictEqual([2,4,6]);
  });

  test('merges [] with [] to equal []', () => {
    expect(math.merge([], [])).toStrictEqual([]);
  });

  test('merges [1,3,5,7] with [2,4,6] to equal [1,2,3,4,5,6,7]', () => {
    expect(math.merge([1,3,5,7], [2,4,6])).toStrictEqual([1,2,3,4,5,6,7]);
  });

  test('merges [1,3,5] with [2,4,6,8] to equal [1,2,3,4,5,6,8]', () => {
    expect(math.merge([1,3,5], [2,4,6,8])).toStrictEqual([1,2,3,4,5,6,8]);
  });

  test('merges [1,2,3,4] with [5,6,7] to equal [1,2,3,4,5,6,7]', () => {
    expect(math.merge([1,2,3,4], [5,6,7])).toStrictEqual([1,2,3,4,5,6,7]);
  });

  test('merges [5,6,7] with [1,2,3,4] to equal [1,2,3,4,5,6,8]', () => {
    expect(math.merge([5,6,7], [1,2,3,4])).toStrictEqual([1,2,3,4,5,6,7]);
  });
});
