/**
 * @author muwoo
 * Date: 2018/8/15
 */
var add = require('../add.js');

describe("加法函数的测试", function() {
  var a;
  it("1 加 1 等于 2", function() {
    expect(add(1, 1)).toBe(2);
  });
});
