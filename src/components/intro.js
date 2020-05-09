import React, { useEffect, useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'

const Box = styled.div`
  width: 100%;
  position: relative;

  video {
    position: fixed;
    z-index: -1;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    transform: translateX(calc((100% - 100vw) / 2));
    transition: opacity 3s;
    opacity: ${props => props.inView ? 0.1 : 1};
  }
`

const Intro = styled.div`
  margin-top: 100vh;
  background-image: linear-gradient(transparent,rgba(255,255,255,0.95));

  p {
    box-sizing: border-box;
    width: 500px;
    margin: auto;

    @media screen and (max-width: 540px) {
      width: 100%;
      padding: 20px;
    }
  }
`

const Transition = styled.div``

export default () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.04,
  })

  return (
    <StaticQuery
      query={graphql`
        query {
          intro: markdownRemark(frontmatter: {title: {eq: "intro"}}) {
            html
            frontmatter {
              title
            }
          }
        }
      `}
      render={data => (
        <Box inView={inView}>
          <video
            src="/assets/hook.mp4"
            muted="muted"
            autoPlay="autoplay"
            loop="loop"
            type="video/mp4"
          />
          <Intro ref={ref} dangerouslySetInnerHTML={{ __html: data.intro.html }} />
          <Transition>
            <video />
          </Transition>
        </Box>
      )}
    />
  )
}