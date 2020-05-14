window.addEventListener("load", function () {
  createObserver();
  setTitle();
  setIcon();
}, false);

function setTitle() {
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
}

function setIcon() {
  let count = 1;
  setInterval(function () {
    var link = document.querySelector("link[rel*='icon']");
    link.href = `/assets/icons/favicon_${count}.png`;
    count++;
    if(count > 6) count = 1;
  }, 1000)
}

function createObserver() {
  const forward = document.querySelector("#forward");
  const bg = document.querySelector("#bg");

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const callback = function (entries, observer) {
    let entry = entries[0];
    console.log({ entry });

    if (entry.isIntersecting) bg.classList.add('fade');
    else bg.classList.remove('fade');
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(forward);
}