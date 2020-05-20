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