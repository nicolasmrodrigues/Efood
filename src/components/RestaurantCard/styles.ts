import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.li`
  position: relative;
  background-color: #fff;
  color: ${colors.pink};
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
`

export const Image = styled.img`
  display: block;
  height: 217px;
  width: 100%;
  object-fit: cover;
`

export const Info = styled.li`
  color: ${colors.light_pink};
  font-weight: 700;
  font-size: 12px;
  padding: 6px 4px;
  background-color: ${colors.pink};
`

export const Infos = styled.ul`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  margin: 16px 16px 0 0;
  gap: 8px;
`

export const Icon = styled.img`
  height: 20px;
  width: auto;
  margin-left: 8px;
`

export const Button = styled(Link)`
  display: inline-block;
  padding: 4px 6px;
  background-color: ${colors.pink};
  font-weight: 700;
  font-size: 14px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  margin-top: 16px;
  color: ${colors.light_pink};
`

export const TextContainer = styled.div`
  background-color: #fff;
  border: 1px solid ${colors.pink};
  border-top: none;
  padding: 8px;
`

export const TitleContainer = styled.div`
  justify-content: space-between;

  &,
  div {
    display: flex;
  }
`
