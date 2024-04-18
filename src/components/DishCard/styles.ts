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
  min-height: 88px;
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

export const Modal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 14px;
  line-height: 22px;
  z-index: 1;
  align-items: center;
}

  &.visible {
    display: flex;
  }

  p {
    margin-bottom: 24px;
  }
`

export const ModalContent = styled.div`
  display: flex;
  background-color: ${colors.pink};
  padding: 32px;
  position: relative;
  z-index: 1;

  span {
    display: block;
  }
`

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin-right: 24px;
`

export const ModalTitle = styled.h4`
  font-size: 18px;
  font-weight: 900;
  color: #fff;
  margin-bottom: 16px;
`

export const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;
  }
`

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const ModalButton = styled(Button)`
  width: auto;
  text-align: center;
  padding: 4px 8px;
  margin-top: 16px;
`
