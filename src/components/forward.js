import React from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import Row from './row'

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

const Forward = styled.div`
  padding-bottom: 100px;
`

export default () => {
  const [ref, inView] = useInView({
    threshold: 0.8,
  })

  return (
    <>
      {/* <Hook inView={!inView}> */}
      <Hook
        inView={!inView}
        src="/assets/hook.mp4"
        muted="muted"
        autoPlay="autoplay"
        loop="loop"
        type="video/mp4"
      />
      {/* </Hook> */}
      <HookFill ref={ref} />
      <Forward>
        <Row center={<h2>This is a heading</h2>} />
        <Row
          center={
            <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry<sup>1</sup>. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting<sup>2</sup>, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          }
          right={[
            {
              num: 1,
              text: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
              num: 2,
              text: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
          ]}
        />
        <Row
          center={
            <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          }
        />
        <Row center={<h2>This is a longer heading - continuing a longer heading.</h2>} />
        <Row
          center={
            <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry<sup>3</sup>. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting<sup>4</sup>, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          }
          right={[
            {
              num: 3,
              text: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
              num: 4,
              text: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
          ]}
        /><Row
          center={
            <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          }
        />
      </Forward>
    </>
  )
}