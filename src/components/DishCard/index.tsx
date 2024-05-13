import { formatDescription, formatPrice } from '../../utils'
import * as S from './styles'
import { Container, Description, colors } from '../../styles'
import Button from '../Button'
import close from '../../assets/images/close.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  dish: Dish
}

const DishCard = ({ dish }: Props) => {
  const [isVisible, setIsvisible] = useState(false)

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(dish))
    dispatch(open())
    setIsvisible(false)
  }

  return (
    <>
      <S.Card>
        <S.Image src={dish.foto} alt="" />
        <S.Title>{dish.nome}</S.Title>
        <Description color={colors.light_pink}>
          {formatDescription(dish.descricao, 165)}
        </Description>
        <Button onClick={() => setIsvisible(true)}>
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
              <Button onClick={addToCart}>
                {`Adicionar ao carrinho - ${formatPrice(dish.preco)}`}
              </Button>
            </div>
          </S.ModalContent>
        </Container>
        <S.Overlay onClick={() => setIsvisible(false)} />
      </S.Modal>
    </>
  )
}

export default DishCard
