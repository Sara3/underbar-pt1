const _ = require('../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.reject(nums, num => num % 2 === 1)).toEqual([2, 4, 6, 8, 10]);
  });

  it('rejects null values from an object', () => {
    const order = {
      entree: 'burger',
      side: null,
      condiment: 'ketchup',
      drink: null,
      dessert: 'cookie'
    };

    const orderItems = _.reject(order, (value) => value === null);
    expect(orderItems).toEqual(['burger', 'ketchup', 'cookie']);
  });

  it('reject numbers from objects', ()=>{
    const obj ={
      car: 22,
      com: "my car is black",
      what: "is your car ",
      my: 4
    };
    const strings = _.reject(obj, value => !isNaN(value));
    expect(strings).toEqual(["my car is black","is your car "]);
  });
});