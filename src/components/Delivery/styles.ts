import styled from 'styled-components'
import { colors } from '../../styles'

export const Delivery = styled.div`
  color: ${colors.light_pink};

  form {
    margin-top: 16px;

    h4 {
      margin-bottom: 16px;
    }
  }

  #address-numbers {
    display: grid;
    grid-template-columns: 152px 152px;
    justify-content: space-between;
  }

  .margin-bottom {
    margin-bottom: 24px;
  }
`

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin: 8px 0;
`

export const Input = styled.input`
  padding: 8px;
  width: 100%;
  font-weight: 700;
  font-size: 14px;
  color: #4b4b4b;
  border: none;
`
