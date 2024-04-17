import star from '../../assets/images/star.png'
import { RestaurantType } from '../../pages/Home'
import formatDescription from '../../utils/FormatDescription'
import * as S from './styles'

type Props = {
  restaurant: RestaurantType
}

const RestaurantCard = ({ restaurant }: Props) => {
  const getInfos = () => {
    const infos = []

    if (restaurant.destacado) {
      infos.push('Destaque da semana')
    }

    infos.push(restaurant.tipo)

    return infos
  }

  return (
    <S.Card>
      <S.Image src={restaurant.capa} alt="" />
      <S.Infos>
        {getInfos().map((info) => (
          <S.Info key={info}>{info}</S.Info>
        ))}
      </S.Infos>
      <S.TextContainer>
        <S.TitleContainer>
          <S.Title>{restaurant.titulo}</S.Title>
          <div>
            <S.Title as="span">{restaurant.avaliacao}</S.Title>
            <S.Icon src={star} />
          </div>
        </S.TitleContainer>
        <S.Description>
          {formatDescription(restaurant.descricao, 250)}
        </S.Description>
        <S.Button to={`/restaurant/${restaurant.id}`}>Saiba mais</S.Button>
      </S.TextContainer>
    </S.Card>
  )
}

export default RestaurantCard
