const btn = document.querySelector("button");

function debounce(fn, delay) {
  let timeoutId;

  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn();
    }, delay);
  };
}
btn.addEventListener("click", debounce());
