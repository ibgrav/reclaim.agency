import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Box = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  flex-flow: row;
  flex-wrap: nowrap;
`

const Body = styled.div`
  width: 100%;
`

const Screenplay = styled.div`
  p {
    width: 600px;
    margin: auto;
  }
  img {
    width: 100%;
  }
`

const Timeline = styled.div`
`;

export default () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          screenplay: markdownRemark(frontmatter: {title: {eq: "screenplay"}}) {
            html
            frontmatter {
              title
            }
          }
        }
      `}
      render={data => (
        <Box>
          <Timeline>
            This<br />is<br />the<br />timeline!
          </Timeline>
          <Body>
            <Screenplay dangerouslySetInnerHTML={{ __html: data.screenplay.html }} />
          </Body>
        </Box>
      )}
    />
  )
}