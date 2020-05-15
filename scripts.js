let titleInterval, iconInterval;

window.addEventListener("load", function () {
  lazyObservers();
  forwardObserver();
  setTitle();
  setIcon();
}, false);

document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    clearInterval(titleInterval);
    clearInterval(iconInterval);
  } else {
    setTitle();
    setIcon();
  }
}, false);

function setTitle() {
  let titleLength = 3;
  let finalCount = 0;
  const titleFinal = 'R_E_C_L_A_I_M_E_D';
  titleInterval = setInterval(() => {
    console.log('SET TITLE');
    if (titleLength > 0) {
      titleLength--;
      const periods = '.'.repeat(titleLength);
      document.title = `${periods}reclaim${periods}agency${periods}`;
    } else if (document.title.length > 3 && finalCount === 0) {
      document.title = document.title.substring(1, document.title.length - 1);
    } else if (finalCount < titleFinal.length - 1) {
      finalCount++;
      document.title = titleFinal.substring(0, finalCount);
    } else {
      document.title = titleFinal
      clearInterval(titleInterval);
      setTimeout(setTitle, 5000);
    }
  }, 1000)
}

function setIcon() {
  let c = 1;
  iconInterval = setInterval(function () {
    const prev = document.querySelector(`#icon-${c === 0 ? 3 : c - 1}`);
    const next = document.querySelector(`#icon-${c}`);
    prev.rel = "";
    next.rel = "shortcut icon";
    c++;
    if (c > 3) c = 0;
  }, 2000)
}

function forwardObserver() {
  const forward = document.querySelector("#forward");
  const bg = document.querySelector("#bg");

  const options = {
    threshold: 0.05,
  };

  const callback = function (entries, observer) {
    let entry = entries[0];
    if (entry.isIntersecting) bg.classList.add('fade');
    else bg.classList.remove('fade');
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(forward);
}

function lazyObservers() {
  const lazies = document.querySelectorAll("[data-src]");
  
  const options = {
    threshold: 0,
    rootMargin: "0px 0px 300px 0px"
  };

  const callback = function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.src) {
        entry.target.src = entry.target.dataset.src
      }
    })
  };

  const observer = new IntersectionObserver(callback, options);
  lazies.forEach(lazy => observer.observe(lazy));
}