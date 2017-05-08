const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('de-dups values of an object', ()=>{
    const obj ={
      num: 22,
      x: 33,
      h:22
    };
    expect(_.uniq(obj)).toEqual([22,33]);
  });


});