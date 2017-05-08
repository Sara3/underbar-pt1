_ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

   it('maps every numbers in an object to that number plus 2', () => {
    const obj = {
      id: 33,
      age: 22,
      class: 2
    };
    const mappedObj = _.map(obj, (el) => el +2 );
    expect(mappedObj).toEqual([35, 24, 4]);
  });

});