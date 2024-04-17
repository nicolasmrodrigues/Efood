import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.light_pink};
  padding: 40px 0;
  text-align: center;
`

export const List = styled.ul`
  display: flex;
  justify-content: center;
  padding: 32px 0 80px 0;
  gap: 8px;
`

export const Item = styled.li`
  width: 24px;
  height: 24px;
`

export const TextContainer = styled.div`
  color: ${colors.pink};
  width: 480px;
  display: block;
  margin: 0 auto;

  p {
    font-size: 10px;
  }
`
