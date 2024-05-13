import { styled } from 'styled-components'

export const Form = styled.form`
  #address-numbers {
    display: grid;
    grid-template-columns: 152px 152px;
    justify-content: space-between;
  }

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
`
