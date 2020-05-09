import React from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import Styles from '../components/styles'
import Forward from '../components/forward'
import Screenplay from '../components/screenplay'

const Transition = styled.div`
  width: 100vw;
  height: 100vh;
  line-height: 0;
  position: relative;

  video {
    min-width: 100vw;
    min-height: 100vh;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

export default () => {
  return (
    <main>
      <Head />
      <Styles />
      <Forward />
      <Transition>
        <video
          src="/assets/hook.mp4"
          muted="muted"
          autoPlay="autoplay"
          loop="loop"
          type="video/mp4"
        />
      </Transition>
      <Screenplay />
    </main>
  )
}