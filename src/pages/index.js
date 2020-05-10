import React from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import Head from '../components/head'
import Styles from '../components/styles'
import Forward from '../components/forward'
import Screenplay from '../components/screenplay'

const HookFill = styled.div`
  width: 100vw;
  height: 100vh;
`

const Hook = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  transition: opacity 1s;
  overflow: hidden;
  z-index: -1;
  opacity: ${props => props.inView ? 0.1 : 1};
  transform: translateX(calc((100% - 100vw) / 2));
`

const Transition = styled.div`
  width: 100vw;
  height: 100vh;
  line-height: 0;
  position: relative;
  overflow: hidden;

  video {
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

const autoplay = {
  muted: "muted",
  playsInline: "playsinline",
  autoPlay: "autoplay",
  loop: "loop",
  type: "video/mp4"
}

export default () => {
  const [ref, inView] = useInView({
    threshold: 0.8,
  })

  return (
    <main>
      <Head />
      <Styles />
      <Hook
        inView={!inView}
        src="/assets/hook.mp4"
        {...autoplay}
      />
      <HookFill ref={ref} />
      <Forward />
      <Transition>
        <video
          src="/assets/hook.mp4"
          {...autoplay}
        />
      </Transition>
      <Screenplay />
    </main>
  )
}