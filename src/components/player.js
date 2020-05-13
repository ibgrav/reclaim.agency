import React, { useCallback, useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

const Audio = styled.audio`
  display: none;
`

const Button = styled.div`
  font-size: 3em;
  font-weight: 700;

  :hover {
    cursor: pointer;
  }
`

export default ({ src }) => {
  const [isOn, setIsOn] = useState(false)
  const audio = useRef(null)

  function toggle() {
    if (audio) {
      if (isOn) audio.current.pause()
      else audio.current.play()
      setIsOn(!isOn)
    }
  }

  return (
    <div>
      <Button onClick={toggle}>{isOn ? '||' : '|>'}</Button>
      <Audio
        ref={audio}
        src={`/assets/${src}`}
      />
    </div>
  )
}