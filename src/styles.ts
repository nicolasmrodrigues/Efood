import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  pink: '#e66767',
  light_pink: '#FFEBD9',
  pinkish_white: '#fff8f2',
  white: '#fff'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  html, body {
    overflow-x: hidden;
  }

  body {
    background-color: ${colors.pinkish_white};
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 364px;
  }
`

export const Logo = styled.img`
  height: 58px;
  width: auto;

  @media (max-width: 768px) {
    height: 50px;
    width: auto;
  }
`

type DescriptionProps = {
  color: string
}

export const Description = styled.p<DescriptionProps>`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  min-height: 88px;
  color: ${(props) => props.color};
`

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin: 8px 0;
`

export default GlobalStyle
