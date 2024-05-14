import styled from 'styled-components'
import { Description, colors } from '../../styles'
import { Button } from '../Button/styles'

export const Card = styled.li`
  padding: 8px;
  background-color: ${colors.pink};
`

export const Title = styled.h3`
  font-weight: 900;
  font-size: 16px;
  margin: 8px 0;
  color: ${colors.light_pink};
`

export const Image = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
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

  ${Button} {
    text-align: center;
    width: 220px;
    padding: 4px 8px;
    margin-top: 16px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
}

  &.visible {
    display: flex;
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

  @media (max-width: 768px) {
    display: block;
    padding: 24px;
  }
`

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin-right: 24px;

  @media (max-width: 768px) {
    margin: 16px 0 8px 0;
    margin-right: 0;
    width: 100%;
    height: 224px;
  }
`

export const ModalTitle = styled.h4`
  font-size: 18px;
  font-weight: 900;
  color: #fff;
  margin-bottom: 16px;
`

export const ModalDescription = styled(Description)`
  min-height: auto;
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

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 280px;
  padding-bottom: 32px;
`
