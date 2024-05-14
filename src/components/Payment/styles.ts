import { styled } from 'styled-components'

export const Form = styled.form`
  input {
    padding: 8px;
    width: 100%;
    font-weight: 700;
    font-size: 14px;
    color: #4b4b4b;
    border: 2px solid transparent;

    &.error {
      border: 2px solid red;
    }
  }

  @media (min-width: 768px) {
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
  }
`

export const ButtonsContainer = styled.div`
  margin-top: 24px;
`
