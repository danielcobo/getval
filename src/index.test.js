const getInput = require('./index.js');
test('Get input', function () {
  document.body.innerHTML = '<input id="test" value="nice day">';
  const $el = document.getElementById('test');
  expect(getInput($el)).toStrictEqual('nice day');
});

test('type="radio"', function () {
  document.body.innerHTML = `
    <form>
      <div>
        <input id="radio1" type="radio" value="one" name="test" checked>
      </div>
      <input id="radio2" type="radio" value="two" name="test" >
    </form>`;
  let $el = document.getElementById('radio1');
  expect(getInput($el)).toStrictEqual('one');

  document.body.innerHTML = `
    <form>
      <div>
        <input id="radio1" type="radio" value="one" name="test">
      </div>
      <input id="radio2" type="radio" value="two" name="test" checked>
    </form>`;
  $el = document.getElementById('radio2');
  expect(getInput($el)).toStrictEqual('two');

  document.body.innerHTML = `
    <form>
      <div>
        <input id="radio1" type="radio" value="one">
      </div>
      <input id="radio2" type="radio" value="two">
    </form>`;
  $el = document.getElementById('radio1');
  expect(getInput($el)).toStrictEqual(undefined);
});

test('type="checkbox"', function () {
  document.body.innerHTML = `
  <form>
    <label><input name="topping" type="checkbox">Sprinkles</label>
    <label><input name="topping" type="checkbox">Chocolate</label>
    <label><input name="topping" type="checkbox" checked>Caramel</label>
  </form>`;
  const $el = document.querySelector('[name="topping"]');
  expect(getInput($el)).toStrictEqual(['on']);

  document.body.innerHTML = `
  <form>
    <label><input name="topping" type="checkbox" value="sprinkles">Sprinkles</label>
    <label><input name="topping" type="checkbox" value="chocolate">Chocolate</label>
    <label><input name="topping" type="checkbox" value="caramel" checked>Caramel</label>
  </form>`;
  const $el2 = document.querySelector('[name="topping"]');
  expect(getInput($el2)).toStrictEqual(['caramel']);

  document.body.innerHTML = `
  <form>
    <label><input name="topping" type="checkbox" value="sprinkles">Sprinkles</label>
    <label><input name="topping" type="checkbox" value="chocolate">Chocolate</label>
    <label><input name="topping" type="checkbox" value="caramel">Caramel</label>
  </form>`;
  const $el3 = document.querySelector('[name="topping"]');
  expect(getInput($el3)).toStrictEqual([]);
});

test('select', function () {
  document.body.innerHTML = `<select name="ice-cream" id="ice-cream">   
    <option value="">--Please choose an option--</option>
    <option value="vanilla">Vanilla</option>
    <option value="chocolate">Chocolate</option>
    <option value="strawberry">Strawberry</option>
  </select>`;

  const $el = document.getElementById('ice-cream');
  $el.selectedIndex = 2;
  expect(getInput($el)).toStrictEqual('chocolate');
});
