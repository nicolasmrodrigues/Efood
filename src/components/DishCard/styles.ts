import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.li`
  padding: 8px;
  background-color: ${colors.pink};

  * {
    color: ${colors.light_pink};
  }
`

export const Title = styled.h3`
  font-weight: 900;
  font-size: 16px;
  margin: 8px 0;
`

export const Image = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
`

export const Button = styled.button`
  display: block;
  width: 100%;
  cursor: pointer;
  padding: 4px 0;
  background-color: ${colors.light_pink};
  color: ${colors.pink};
  font-weight: 700;
  font-size: 14px;
  border: none;
  text-align: center;
  margin-top: 8px;
  transition: background-color ease 0.2s;

  &:hover {
    background-color: #eddccc;
  }
`
