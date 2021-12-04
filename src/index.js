/**
 * Get current value of input
 * (works for radio, etc. as well)
 * @public
 * @param {HTMLElement} $el - any input element to get value from
 * @returns {Array.string|string} - value/s of input
 */
module.exports = function getVal($el) {
  const type = $el.getAttribute('type');
  const $form = $el.closest('form');

  //Radio and checkbox are not efficient
  if (type === 'radio') {
    const val = undefined;
    const checked = document.querySelector(
      'input[name=' + $el.getAttribute('name') + ']:checked',
      $form
    );
    if (checked) {
      return checked.value;
    }
  } else if (type === 'checkbox') {
    const vals = [];
    const checked =
      document.querySelectorAll(
        'input[name=' + $el.getAttribute('name') + ']:checked',
        $form
      ) || [];

    checked.forEach(function ($checked) {
      vals.push($checked.value);
    });
    return vals;
  } else {
    //input or select
    return $el.value;
  }
};
