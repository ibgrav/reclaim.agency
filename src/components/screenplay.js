import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useInView } from 'react-intersection-observer'

const firstBreak = '@media screen and (max-width: 900px)';
const secondBreak = '@media screen and (max-width: 500px)';

const Transition = styled.div`
  width: 100vw;
  line-height: 0;

  video {
    width: 100%;
  }
`

const Screenplay = styled.div`
  background-color: rgba(255,255,255,0.95);
  padding: 40px 0;
`


const Box = styled.div`
  position: relative;
  display: flex;
  flex-flow: row;
  padding: 20px 0;
  justify-content: center;
`

const Line = styled.div`
  flex: 1;
  text-align: center;
  align-self: auto;
  padding-top: 10px;
`

const Note = styled.div`
  flex: 1;

  p {
    margin: auto;
    width: 300px;
    font-size: 0.8em;
    line-height: initial;
    padding-top: 10px;
  }
`

const Img = styled.img`
  
`

const Content = styled.div`
  flex: 1;
  min-width: 600px;

  h2, p {
    max-width: 600px;
    margin: auto;
  }
`

export default () => {
  const [ref, inView, entry] = useInView()
  const [fixed, setFixed] = useState(false)
  const [below, setBelow] = useState(false)
  console.log({ fixed, below })

  useEffect(() => {
    if (inView) {
      setBelow(!below)
    }
    if (!inView) {
      if (below) setFixed(true)
    }
  }, [inView])

  return (
    <>
      <Transition>
        <video
          ref={ref}
          src="/assets/hook.mp4"
          muted="muted"
          autoPlay="autoplay"
          loop="loop"
          type="video/mp4"
        >
          <track />
        </video>
      </Transition>
      <Screenplay>
        <Box>
          <Line></Line>
          <Content>
            <h2>This is a heading</h2>
          </Content>
          <Note />
        </Box>
        <Box>
          <Line>2020</Line>
          <Content>
            <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry<sup>1</sup>. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Content>
          <Note>
            <p>1. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </Note>
        </Box>
        <Box>
          <Line></Line>
          <Content>
            <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry<sup>1</sup>. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Content>
          <Note />
        </Box>
        <Box>
          <Img src="/assets/pleasure_poster.jpeg" />
        </Box>
        <Box>
          <Line>2040</Line>
          <Content>
            <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry<sup>1</sup>. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Content>
          <Note>
            <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </Note>
        </Box>
        <Box>
          <Line>2000</Line>
          <Content>
            <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry<sup>1</sup>. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Content>
          <Note />
        </Box>
      </Screenplay>
    </>
  )
}