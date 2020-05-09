import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

let titleLength = 20
let finalCount = 0
const titleFinal = 'R_E_C_L_A_I_M_E_D'

export default () => {
  const [title, setTitle] = useState('.')

  useEffect(() => {
    const interval = setInterval(() => {
      if (titleLength > 0) {
        titleLength--
        const periods = '.'.repeat(titleLength)
        setTitle(`${periods}reclaim${periods}agency${periods}`)
      } else if (document.title.length > 3) {
        setTitle(document.title.substring(1, document.title.length - 1))
      } else if (finalCount < titleFinal.length - 1) {
        finalCount++
        setTitle(titleFinal.substring(0, finalCount))
      } else setTitle(titleFinal)
    }, 1000)

    return () => clearInterval(interval)
  }, []);

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  )
}