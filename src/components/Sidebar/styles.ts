import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  justify-content: flex-end;

  &.visible {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.pink};
  max-width: 360px;
  width: 100%;
  height: 100%;
  padding: 32px 8px;
`

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
`
