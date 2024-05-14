import styled from 'styled-components'
import backgroundImage from '../../assets/images/background.png'
import { colors } from '../../styles'
import { Props } from '.'

export const HeaderContainer = styled.header<Props>`
  background-image: url(${backgroundImage});
  height: ${(props) => (props.type == 'primary' ? '186px' : '384px')};
  display: ${(props) => props.type == 'primary' && 'flex'};
  justify-content: ${(props) => props.type == 'primary' && 'space-between'};
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  padding: ${(props) =>
    props.type == 'primary' ? '0 171px' : '64px 0px 0px 0px'};
  text-align: center;
  align-items: center;
  color: ${colors.pink};

  a,
  button {
    font-size: 18px;
    font-weight: 900;
    cursor: pointer;
    text-decoration: none;
    color: ${colors.pink};
  }

  @media (max-width: 768px) {
    padding: ${(props) => props.type === 'primary' && '24px'};
    align-items: ${(props) => props.type === 'primary' && 'center'};
    height: ${(props) => (props.type === 'primary' ? '162px' : '316px')};

    img {
      height: ${(props) => props.type === 'secondary' && '58px'};
      width: auto;
    }

    button {
      width: 100px;
    }
  }
`

export const Title = styled.h2`
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  width: 542px;
  margin: 0 auto;
  margin-top: 136px;

  @media (max-width: 768px) {
    width: auto;
    font-size: 24px;
    margin-top: 68px;
  }
`

export const CartButton = styled.button`
  background: transparent;
  border: none;
`
