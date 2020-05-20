function forwardObserver() {
    const forward = document.querySelector("#forward");
    const bg = document.querySelector("#bg");

    const options = {
        threshold: 0.01,
    };

    const callback = function (entries, observer) {
        let entry = entries[0];
        if (entry.isIntersecting) bg.classList.add('fade');
        else bg.classList.remove('fade');
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(forward);
}

function screenplayObserver() {
    const screenplay = document.querySelector("#screenplay");
    const bg = document.querySelector("#bg");

    const options = {
        threshold: 0,
    };

    const callback = function (entries, observer) {
        let entry = entries[0];
        if (entry.isIntersecting) bg.classList.add('hide');
        else bg.classList.remove('hide');
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(screenplay);
}

function lazyObservers() {
    const lazies = document.querySelectorAll("[data-src]");

    const options = {
        threshold: 0,
        rootMargin: "300px 0px 300px 0px"
    };

    const callback = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.dataset.src) {
                entry.target.src = entry.target.dataset.src;
                entry.target.classList.add('fade-in');
                entry.target.dataset.src = '';
            }
            entry.target.addEventListener("load", function () {
                setTimeout(function () {
                    entry.target.classList.remove('fade-in')
                }, 1000)
            }, false)
        })
    };

    const observer = new IntersectionObserver(callback, options);
    lazies.forEach(lazy => observer.observe(lazy));
}