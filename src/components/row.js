import React from 'react'
import styled from 'styled-components'

const firstBreak = '@media screen and (max-width: 900px)';
const secondBreak = '@media screen and (max-width: 500px)';

const FlexBox = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  padding: 20px 0;

  img {
    width: 80vw;
  }

  ${firstBreak} {
    flex-flow: column;
    padding: 0 20px;
    box-sizing: border-box;

    img {
      width: 100%;
    }
  }
`

const LeftBox = styled.div`
  flex: 1;
  text-align: center;
  align-self: auto;
  padding-top: 10px;

  ${firstBreak} {
    :nth-child(2) {
      padding: 100px 0;
    }
  }
`

const RightBox = styled.div`
  flex: 1;

  p {
    display: flex;
    margin: auto;
    width: 300px;
    font-size: 0.8em;
    line-height: initial;
    padding-top: 10px;
  }

  sup {
    margin-top: -3px;
    padding-right: 3px;
    font-size: 0.7em;
  }
`

const CenterBox = styled.div`
  flex: 1;
  min-width: 600px;

  h2, p {
    max-width: 600px;
    margin: 0 auto;
  }

  h2 {
    text-align: center;
  }

  sup {
    font-size: 0.7em;
    line-height: 0;
  }

  ${firstBreak} {
    min-width: auto;
  }
`

export default ({ left, center, right, img }) => {
  return (
    <FlexBox>
      {img ? <img src={img} alt={img} /> :
        <>
          <LeftBox>{left}</LeftBox>
          <CenterBox>{center}</CenterBox>
          <RightBox>{right && Array.isArray(right) && right.map((item, i) => (
            <p key={i}>
              <sup>{item.num}</sup>
              {item.text}
            </p>
          ))}</RightBox>
        </>
      }
    </FlexBox>
  )
}