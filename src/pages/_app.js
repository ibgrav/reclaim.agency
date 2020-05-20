import { Global, css } from '@emotion/core'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Global
                styles={css`
                    ::-webkit-scrollbar {
                        display: none;
                    }
                    
                    * {
                        -ms-overflow-style: none;
                    }
                    
                    body {
                        overflow-x: hidden;
                        margin: 0;
                        font-family: "Courier New", Courier, monospace;
                        font-size: 16px;
                        text-rendering: optimizeLegibility;
                        -webkit-font-smoothing: antialiased;
                        overflow-x: hidden;
                    }
                `}
            />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp