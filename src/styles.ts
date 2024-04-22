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

type ButtonProps = {
  type: 'primary' | 'secondary'
}

export const Button = styled.button<ButtonProps>`
  display: inline-block;
  width: ${(props) => (props.type === 'primary' ? '100%' : 'auto')};
  cursor: pointer;
  padding: ${(props) => (props.type === 'primary' ? '4px 0' : '4px 6px')};
  background-color: ${(props) =>
    props.type === 'primary' ? colors.light_pink : colors.pink};
  color: ${(props) =>
    props.type === 'primary' ? colors.pink : colors.light_pink};
  font-weight: 700;
  font-size: 14px;
  border: none;
  text-align: center;
  margin-top: 8px;
  transition: background-color ease 0.2s;
  text-decoration: none;

  &:hover {
    background-color: ${(props) =>
      props.type === 'primary' ? '#eddccc' : '#cf5b5b'};
  }
`

export default GlobalStyle
