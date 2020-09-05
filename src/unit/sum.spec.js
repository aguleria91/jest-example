const sum = require('./sum.js');
// import sum from './sum.js';
 
describe('sum function', () => {
  it('sums up two integers', () => {
    expect(sum(5, 5)).toEqual(10);
  });
});