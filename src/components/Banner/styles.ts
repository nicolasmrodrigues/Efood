import styled from 'styled-components'
import { Container } from '../../styles'

export const Banner = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  ${Container} {
    padding: 24px 0 32px 0;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &::after {
    content: '';
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  * {
    font-size: 32px;
    position: absolute;
  }
`

export const CuisineType = styled.span`
  font-weight: 100;
  color: #fff;
`

export const Title = styled.h2`
  font-weight: 900;
  color: #fff;
  width: 672px;
  bottom: 32px;
`
