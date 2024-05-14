import styled from 'styled-components'
import { colors } from '../../styles'

export const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 8px;
`

export const CartItem = styled.li`
  display: flex;
  margin-bottom: 16px;
  background-color: ${colors.light_pink};
  padding: 8px 8px 12px 8px;
  position: relative;
  color: ${colors.pink};

  h4 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
  }
`

export const DeleteIcon = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 8px 0;
  color: ${colors.light_pink};

  span {
    font-size: 14px;
    font-weight: bold;
  }
`

export const Title = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.light_pink};
  text-align: center;
`
