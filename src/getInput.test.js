/**
 * @jest-environment jsdom
 */
const getInput = require('./getInput.js');
test('Get input', function () {
  document.body.innerHTML = '<input id="test" value="nice day">';
  const $el = document.getElementById('test');
  expect(getInput($el)).toStrictEqual('nice day');
});
