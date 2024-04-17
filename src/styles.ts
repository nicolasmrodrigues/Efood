import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  pink: '#e66767',
  light_pink: '#FFEBD9',
  pinkish_white: '#fff8f2'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.pinkish_white};
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const Logo = styled.img`
  height: 58px;
  width: auto;
`

export default GlobalStyle
