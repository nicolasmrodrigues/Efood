import { Container } from '../../styles'
import * as S from './styles'

type Props = {
  restaurant: Restaurant
}

const Banner = ({ restaurant }: Props) => (
  <>
    <S.Banner style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <Container>
        <S.CuisineType>{restaurant.tipo}</S.CuisineType>
        <S.Title>{restaurant.titulo}</S.Title>
      </Container>
    </S.Banner>
  </>
)

export default Banner
