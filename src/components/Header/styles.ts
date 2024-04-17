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
    props.type == 'primary' ? '82px 171px' : '64px 0px 0px 0px'};
  text-align: center;
  color: ${colors.pink};

  div,
  a {
    font-size: 18px;
    font-weight: 900;
    text-decoration: none;
    color: ${colors.pink};
  }
`

export const Title = styled.h2`
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  width: 542px;
  margin: 0 auto;
  margin-top: 136px;
`
