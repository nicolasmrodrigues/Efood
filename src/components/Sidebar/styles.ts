import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  justify-content: flex-end;

  color: ${colors.light_pink};

  h4 {
    margin-bottom: 16px;
  }

  .margin-bottom {
    margin-bottom: 24px;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.pink};
  max-width: 360px;
  width: 100%;
  height: 100%;
  padding: 32px 8px;

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
  }
`

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
`

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
`

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin: 8px 0;
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
