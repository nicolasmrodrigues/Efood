import formatDescription from '../../utils/FormatDescription'
import * as S from './styles'
import { DishType } from '../../pages/RestaurantProfile'
import { Button, Container, Description, colors } from '../../styles'
import close from '../../assets/images/close.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

export type Props = {
  dish: DishType
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const DishCard = ({ dish }: Props) => {
  const [isVisible, setIsvisible] = useState(false)

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(dish))
    dispatch(open())
  }

  return (
    <>
      <S.Card>
        <S.Image src={dish.foto} alt="" />
        <S.Title>{dish.nome}</S.Title>
        <Description color={colors.light_pink}>
          {formatDescription(dish.descricao, 165)}
        </Description>
        <Button type="primary" onClick={() => setIsvisible(true)}>
          Adicionar ao carrinho
        </Button>
      </S.Card>
      <S.Modal className={isVisible ? 'visible' : ''}>
        <Container>
          <S.ModalContent>
            <S.ModalImage src={dish.foto} alt={`Foto de ${dish.nome}`} />
            <div>
              <S.TitleBar>
                <S.ModalTitle>{dish.nome}</S.ModalTitle>
                <img onClick={() => setIsvisible(false)} src={close} alt="" />
              </S.TitleBar>
              <S.ModalDescription color="#fff">
                {dish.descricao}
              </S.ModalDescription>
              <span>
                Serve:{' '}
                {dish.porcao != '1 pessoa' ? `de ${dish.porcao}` : dish.porcao}
              </span>
              <S.ModalButton
                onClick={addToCart}
                type="primary"
              >{`Adicionar ao carrinho - ${formatPrice(
                dish.preco
              )}`}</S.ModalButton>
            </div>
          </S.ModalContent>
        </Container>
        <S.Overlay onClick={() => setIsvisible(false)} />
      </S.Modal>
    </>
  )
}

export default DishCard
