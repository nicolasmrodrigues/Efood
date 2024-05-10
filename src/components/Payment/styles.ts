import styled from 'styled-components'
import { colors } from '../../styles'

export const Payment = styled.div`
  color: ${colors.light_pink};

  form {
    margin-top: 16px;
  }

  h4 {
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
  }

  #security {
    display: grid;
    grid-template-columns: 228px 87px;
    justify-content: space-between;
  }

  #expiration {
    display: grid;
    grid-template-columns: 155px 155px;
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
