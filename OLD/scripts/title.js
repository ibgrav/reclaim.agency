let titleLength = 20
let finalCount = 0
const titleFinal = 'R_E_C_L_A_I_M_E_D'

setInterval(() => {
  if (titleLength > 0) {
    titleLength--
    const periods = '.'.repeat(titleLength)
    document.title = `${periods}reclaim${periods}agency${periods}`
  } else if(document.title.length > 3) {
    document.title = document.title.substring(1, document.title.length - 1)
  } else if(finalCount < titleFinal.length - 1) {
    finalCount++ 
    document.title = titleFinal.substring(0, finalCount)
  } else document.title = titleFinal
}, 1000)