const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('returns true if asked for even number and some of the values of objects are even',()=>{
      const obj ={
        car: 7,
        black:2
      };
      expect(_.some(obj, num => num % 2 === 0 )).toBe(true);
    });

  it('returns false if asked for even number and none the values of objects are even',()=>{
      const obj ={
        car: 1,
        black:5
      };
      expect(_.some(obj, num => num % 2 === 0 )).toBe(false);
    });

});