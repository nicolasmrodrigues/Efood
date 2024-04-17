import star from '../../assets/images/star.png'
import * as S from './styles'

export type RestaurantType = {
  image: string
  infos: string[]
  name: string
  rating: string
  description: string
  id: number
}

const RestaurantCard = ({
  image,
  infos,
  name,
  rating,
  description,
  id
}: RestaurantType) => (
  <S.Card>
    <S.Image src={image} alt="" />
    <S.Infos>
      {infos.map((info) => (
        <S.Info key={info}>{info}</S.Info>
      ))}
    </S.Infos>
    <S.TextContainer>
      <S.TitleContainer>
        <S.Title>{name}</S.Title>
        <div>
          <S.Title as="span">{rating}</S.Title>
          <S.Icon src={star} />
        </div>
      </S.TitleContainer>
      <p>{description}</p>
      <S.Button to={`/restaurant/${id}`}>Saiba mais</S.Button>
    </S.TextContainer>
  </S.Card>
)

export default RestaurantCard
