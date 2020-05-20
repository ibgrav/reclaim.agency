import styled from '@emotion/styled'

const Box = styled.div`
    display: flex;
    flex-flow: row;
    padding: 30px;
    margin: auto;
`
const Main = styled.div`
    flex: 2;
    @media screen and (max-width: 1200px) {
        flex: 3;
    }
`
const Span = styled.div`
  display: flex;
  flex-flow: row;
  padding-right: 30px;

  @media screen and (max-width: 700px) {
    flex-flow: column;
    padding: 20px;
  }
`
const Left = styled.div`
    flex: 1;
    padding-right: 30px;
    font-size: 12px;
    line-height: 20px;
    
    @media screen and (max-width: 700px) {
        padding-right: 0;
    }
`
const Center = styled.div`
    flex: 1;
    line-height: 30px;
    max-width: 700px;
    margin: auto;

    sup {
        line-height: 0;
        font-size: 12px;
        font-weight: bold;
    }
    sup a {
        text-decoration: none;
    }

    @media screen and (max-width: 1200px) {
        flex: 2;
    }
`
const Right = styled.div`
    flex: 1;
    font-size: 12px;
    line-height: 20px;

    div {
        max-width: 350px;
        margin: auto;
        display: flex;
    }
    p {
        margin: 0;
        width: 100%;
        overflow: scroll;
        padding-top: 7px;
        padding-bottom: 7px;
    }
    sup {
        transform: translateX(-1px);
        font-weight: bold;
        font-size: 12px;
    }
    sup a {
        text-decoration: none;
    }

    @media screen and (max-width: 700px) {
        margin-top: 30px;

        div {
            max-width: 80%;
        }
    }
    @media screen and (max-width: 500px) {
        div {
            max-width: 100%;
        }
    }
`

export default ({ left, center, right }) => (
    <Box>
        <Main>
            <Span>
                <Left>{left}</Left>
                <Center>{center}</Center>
            </Span>
        </Main>
        <Right>{right}</Right>
    </Box>
)