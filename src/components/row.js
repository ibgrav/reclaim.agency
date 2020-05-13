import React from 'react'
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

  ${thirdBreak} {
    flex-flow: column;
    padding: 0 ${props => props.hasImg ? 0 : 20}px;
    box-sizing: border-box;

    img {
      margin: 30px 0 20px 0;
      width: 100%;
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
    max-width: 100%;
    max-height: 300px;
    height: auto;
    width: auto;
    transition: filter 1s;
  }

  img:hover {
    animation: ${hue} 1s infinite;
    cursor: pointer;
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

  video {
    width: 60%;
    height: auto;
  }
`

export default ({ left, center, right, img, video }) => {
  return (
    <Flex hasImg={img !== undefined || video !== undefined}>
      {img ? <img src={img} loading="lazy" alt={img} /> :
        video ? <video src={video} {...videoProps} /> :
          <>
            <Left>{left}</Left>
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