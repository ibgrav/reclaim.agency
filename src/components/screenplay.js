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

const Box = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  flex-flow: row;
  flex-wrap: nowrap;
`

const Body = styled.div`
  flex: 2;
`

const Screenplay = styled.div`
  position: relative;
  background-color: rgba(255,255,255,0.95);

  h2, p, div {
    margin: auto;
    box-sizing: border-box;
    width: 600px;
    padding: 10px 20px;

    ${firstBreak} {
     width: 100%;
    }
  }

  h2 {
    padding: 45px 20px 25px 20px;
    text-align: center;
  }

  div {
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
  }

  img {
    width: calc((100vw / 3) * 2);
    background: transparent;
    margin: 0;
    padding: 0;

    ${firstBreak} {
     width: 100%;
    }
  }

  sup {
    :hover {
      cursor: pointer;
    }
  }
`

const Left = styled.div`
  position: relative;
  background: white;
  flex: 1;
`

const Timeline = styled.div`
  position: ${props => props.fixed ? 'fixed' : 'absolute'};
  width: calc(100vw / 3);
  height: 100%;
  left: 0;
  top: 0;
`

const NotePanel = styled.div`
  position: fixed;
  box-sizing: border-box;
  right: 0;
  bottom: 0;
  padding: 25px;
  text-align: right;
  width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: rgba(255,255,255,0.95);
  transition: opacity 500ms ease;
  transform: translateX( ${props => props.open ? 0 : 100}%);
  opacity: ${props => props.open ? 1 : 0};
`

const CloseNote = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;

  :hover {
    cursor: pointer;
  }
`

const notes = {
  1: "This is the first note",
  2: "This is a much longer note. This is a much longer note. This is a much longer note. This is a much longer note. This is a much longer note. This is a much longer note. This is a much longer note. This is a much longer note. ",
  3: "This is the third note",
  4: "This is the fourth note",
  5: "This is the fifth note"
}

export default () => {
  const [ref, inView, entry] = useInView()
  const [fixed, setFixed] = useState(false)
  const [below, setBelow] = useState(false)
  const [open, setOpen] = useState(false)
  console.log({ fixed, below })

  useEffect(() => {
    if (inView) {
      setBelow(!below)
      setOpen(false)
    }
    if (!inView) {
      if (below) setFixed(true)
    }
  }, [inView])

  const Note = ({ id }) => (
    <sup onClick={() => setOpen(id)}>{id}</sup>
  )

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
      <Box>
        <Left>
          <Timeline fixed={fixed}>This<br />is<br />the<br />timeline!</Timeline>
        </Left>
        <Body>
          <Screenplay>
            <h2>This is a heading</h2>
            <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.<Note id={1} /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <div><img src="/assets/pleasure_poster.jpeg" /></div>
            <p>Where does it come from?<Note id={2} /> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            <h2>This is a heading ---- This is a heading ----- This is a heading</h2>
            <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.<Note id={3} /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <div><img src="/assets/pleasure_poster.jpeg" /></div>
            <p>Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            <h2>This is a heading ---- This is a heading ----- This is a heading</h2>
            <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <p>Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            <h2>This is a heading ---- This is a heading ----- This is a heading</h2>
            <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div><img src="/assets/pleasure_poster.jpeg" /></div>
            <p>Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <p>Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
          </Screenplay>
        </Body>
        <NotePanel open={open !== false}>
          <CloseNote onClick={() => setOpen(false)}>×</CloseNote>
          {open && notes[open]}
        </NotePanel>
      </Box>
    </>
  )
}