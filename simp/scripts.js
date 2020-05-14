(function setTitle() {
  let titleLength = 20
  let finalCount = 0
  const titleFinal = 'R_E_C_L_A_I_M_E_D'
  const interval = setInterval(() => {
    console.log('SET TITLE')
    if (titleLength > 0) {
      titleLength--
      const periods = '.'.repeat(titleLength)
      document.title = `${periods}reclaim${periods}agency${periods}`
    } else if (document.title.length > 3 && finalCount === 0) {
      document.title = document.title.substring(1, document.title.length - 1)
    } else if (finalCount < titleFinal.length - 1) {
      finalCount++
      document.title = titleFinal.substring(0, finalCount)
    } else {
      document.title = titleFinal
      clearInterval(interval)
    }
  }, 1000)
})();

window.addEventListener("load", function () {
  createObserver();
}, false);

function createObserver() {
  forward = document.querySelector("#forward");
  bg = document.querySelector("#bg");

  const config = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    console.log({ entries, observer });
    bg.classList.add('fade');
  }, config);

  observer.observe(forward);
}