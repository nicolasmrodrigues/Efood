import * as S from './styles'

export type Props = {
  image: string
  name: string
  description: string
  id: number
}

const DishCard = ({ image, name, description }: Props) => (
  <S.Card>
    <S.Image src={image} alt="" />
    <S.Title>{name}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Button>Adicionar ao carrinho</S.Button>
  </S.Card>
)

export default DishCard
