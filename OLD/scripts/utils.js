export function debounce(func, wait, immediate) {
  let timeout
  return function () {
    const ctx = this, args = arguments
    const later = () => {
      timeout = null
      if (!immediate) func.apply(ctx, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(ctx, args)
  };
};