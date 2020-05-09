function toggleVisible(e) {
  const data = e && e[0]
  if (data) {
    const { target, isVisible } = data
    const src = target.dataset.src
    if (isVisible) {
      target.classList.add('visible')
      if (src) target.src = src
    } if (!isVisible) target.classList.remove('visible')
  }
}

const elements = [
  document.querySelector("#initial-hook"),
  document.querySelector("#intro"),
  document.querySelector("#post-intro-hook"),
  ...document.querySelectorAll('img.fullwidth')
]

console.log({ elements })

export default function () {
  elements.forEach(element =>
    new IntersectionObserver(toggleVisible, { threshold: [0] }).observe(element)
  )
}