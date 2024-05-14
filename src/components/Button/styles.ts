import styled from 'styled-components'
import { Props } from '.'
import { colors } from '../../styles'

export const Button = styled.button<Props>`
  display: inline-block;
  width: ${(props) => (props.variant === 'primary' ? '100%' : 'auto')};
  cursor: pointer;
  padding: ${(props) => (props.variant === 'primary' ? '4px 0' : '4px 6px')};
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.light_pink : colors.pink};
  color: ${(props) =>
    props.variant === 'primary' ? colors.pink : colors.light_pink};
  font-weight: 700;
  font-size: 14px;
  border: none;
  text-align: center;
  margin-top: 8px;
  transition: background-color ease 0.2s;
  text-decoration: none;

  &:hover {
    background-color: ${(props) =>
      props.variant === 'primary' ? '#eddccc' : '#cf5b5b'};
  }
`
