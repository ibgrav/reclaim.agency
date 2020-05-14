import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { videoProps } from '../utils'

const firstBreak = '@media screen and (max-width: 1000px)';
const secondBreak = '@media screen and (max-width: 850px)';
const thirdBreak = '@media screen and (max-width: 700px)';

const Flex = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  padding: 20px 0;

  video {
    width: 60%;
    height: auto;
  }

  ${thirdBreak} {
    flex-flow: column;
    padding: 0 ${props => props.hasImg ? 0 : 20}px;
    box-sizing: border-box;

    img {
      width: 100%;
    }

    video {
      width: 100%;
      height: auto;
    }
  }
`

const hue = keyframes`
  from {
    filter: hue-rotate(0deg);
  }

  to {
    filter: hue-rotate(360deg);
  }
`

const Left = styled.div`
  flex: 1;
  text-align: center;
  align-self: auto;
  padding: 10px 10px 0px 10px;
  
  img {
    max-width: 250px;
    max-height: 250px;
    height: auto;
    width: auto;
    transition: filter 1s;
    margin-bottom: 30px;
    opacity: ${props => props.active ? 0.4 : 1};
    transition: opacity 500ms;
  }

  img:hover {
    animation: ${hue} 1s infinite;
    cursor: pointer;
  }

  div {
    text-align: left;
    max-width: 300px;
    font-size: 0.8em;
    margin: auto;
    opacity: ${props => props.active ? 1 : 0};
    transition: opacity 500ms;
  }
  

  ${thirdBreak} {
    div {
      padding: 30px 0 20px 0;
    }

    :nth-child(2) {
      padding: 100px 0;
    }
  }
`

const Right = styled.div`
  flex: 1;
  padding: 0 10px;

  p {
    display: flex;
    margin: auto;
    max-width: 300px;
    font-size: 0.8em;
    line-height: initial;
    padding-top: 10px;
  }

  sup {
    margin-top: -3px;
    padding-right: 3px;
    font-size: 0.7em;
  }

  ${firstBreak} {
    flex: 2;
  }
  ${thirdBreak} {
    p {
      max-width: initial;
    }
  }
`

const CenterBox = styled.div`
  flex: 1;
  padding: 0 10px;
  min-width: 500px;

  ${firstBreak} {
    flex: 2;
  }

  ${secondBreak} {
    min-width: 400px;
  }

  ${thirdBreak} {
    min-width: auto;
  }

  h2, p {
    margin: 0 auto;
  }

  h2 {
    text-align: center;
  }

  sup {
    font-size: 0.7em;
    line-height: 0;
  }

  img {
    width: 80vw;
  }
`

export default ({ left, center, right, img, video }) => {
  const [leftActive, setLeftActive] = useState(false)

  return (
    <Flex hasImg={img !== undefined || video !== undefined}>
      {img ? <img width="80vw" height="auto" src={img} loading="lazy" alt={img} /> :
        video ? <video src={video} {...videoProps} /> :
          <>
            <Left active={leftActive} onClick={() => setLeftActive(!leftActive)}>{left}</Left>
            <CenterBox>{center}</CenterBox>
            <Right>{right && Array.isArray(right) && right.map((item, i) => (
              <p key={i}>
                <sup>{item.num}</sup>
                {item.text}
              </p>
            ))}</Right>
          </>
      }
    </Flex>
  )
}