const _ = require('../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 6, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(false);
    });

    it('returns true if asked for even number and all the values of objects are even',()=>{
      const obj ={
        car: 8,
        black:2
      };
      expect(_.every(obj, num => num % 2 === 0 )).toBe(true);
    });
    it('returns false if asked for even number and all the values of objects are not even',()=>{
      const obj ={
        car: 7,
        black:2
      };
      expect(_.every(obj, num => num % 2 === 0 )).toBe(false);
    });

  });
});