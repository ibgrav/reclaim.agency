import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Intro = styled.div`
  width: 600px;
  margin: auto;
`
const Transition = styled.div`
  width: 100vw;
  height: 100vh;
`

export default () => {
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
        <>
          <Intro dangerouslySetInnerHTML={{ __html: data.intro.html }} />
          <Transition>
            <video />
          </Transition>
        </>
      )}
    />
  )
}