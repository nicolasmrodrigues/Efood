import formatDescription from '../../utils/FormatDescription'
import * as S from './styles'
import { DishType } from '../../pages/RestaurantProfile'

export type Props = {
  dish: DishType
}

const DishCard = ({ dish }: Props) => (
  <S.Card>
    <S.Image src={dish.foto} alt="" />
    <S.Title>{dish.nome}</S.Title>
    <S.Description>{formatDescription(dish.descricao, 165)}</S.Description>
    <S.Button>Adicionar ao carrinho</S.Button>
  </S.Card>
)

export default DishCard
