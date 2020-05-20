import styled from '@emotion/styled'

export const Title = styled.h3`
    text-align: center;
    margin: 0;
`

export const Set = styled.span`
    font-weight: ${({ bold }) => bold ? 'bold' : 'normal'};
`

const LinkStyled = styled.a``
export const Link = ({ href, children }) => (
    <LinkStyled target="_blank" rel="noopener" href={href}>{children}</LinkStyled>
)

export const Talk = ({ Title, children }) => (
    <p>
        <span>{Title}</span>
        {children}
    </p>
)

export const InNote = ({ num }) => (
    <sup><a id={`fw-${num}-src`} href={`#fw-${num}`}>{num}</a></sup>
)

export const OutNote = ({ num, children }) => (
    <div id={`fw-${num}`}>
        <sup><a href={`#fw-${num}-src`}>{num}</a></sup>
        {children}
    </div>
)