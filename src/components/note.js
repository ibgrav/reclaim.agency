import React from 'react'
import styled from 'styled-components'

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

export default function ({ note, open, setOpen }) {
  <NotePanel open={open !== false}>
    <CloseNote onClick={() => setOpen(false)}>×</CloseNote>
    {note}
  </NotePanel>
}