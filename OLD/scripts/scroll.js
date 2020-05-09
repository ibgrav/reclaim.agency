import { debounce } from './utils'

const visibleElements = []

export function isVisible(elem = null, padPercent = 0) {
  const windowTop = window.pageYOffset
  const windowBottom = windowTop + window.innerHeight

  const pad = (elem.offsetHeight * (padPercent / 100))
  const elemTop = elem.offsetTop + pad
  const elemBottom = (elem.offsetTop + elem.offsetHeight) - pad

  return (windowBottom > elemTop) && (windowTop < elemBottom)
}

export function initScrollListeners() {
  const debScroll = debounce((e) => {
    initElemsVisible()
    fadeHookOnScroll()
  }, 10)

  window.addEventListener('scroll', function () {
    initElemsVisible()
    fadeHookOnScroll()
  })
}

function initElemsVisible() {
  [
    {
      elem: document.querySelector('#initial-hook'),
      pad: 0
    },
    {
      elem: document.querySelector('#post-intro-hook'),
      pad: 30
    },
    {
      elem: document.querySelector('#screenplay'),
      pad: 0
    }
  ].forEach(({ elem, pad }) => {
    if (elem) {
      const elemIndex = visibleElements.indexOf(elem)

      if (isVisible(elem, pad)) {
        if (elemIndex === -1) visibleElements.push(elem)

        if (!elem.classList.contains('visible'))
          elem.classList.add('visible')

      } else {
        if (elemIndex !== -1) visibleElements.splice(elemIndex, 1)

        if (elem.classList.contains('visible'))
          elem.classList.remove('visible')
      }
    }
    console.log({ visibleElements })
  })
}

function fadeHookOnScroll() {
  const hook = document.querySelector('#initial-hook')
  const intro = document.querySelector('#intro')
  const minOpacity = 0.1
  if (hook) {
    const percent = window.pageYOffset / hook.offsetHeight
    if (hook.classList.contains('visible')) {
      const opacity = 1 - percent
      if (opacity > minOpacity)
        hook.style.opacity = opacity
      else hook.style.opacity = minOpacity
    } else {
      if (hook.style.opacity !== minOpacity)
        hook.style.opacity = minOpacity
    }
  }
}
