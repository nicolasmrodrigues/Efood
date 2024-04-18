import formatDescription from '../../utils/FormatDescription'
import * as S from './styles'
import { DishType } from '../../pages/RestaurantProfile'
import { Container } from '../../styles'
import close from '../../assets/images/close.png'
import { useState } from 'react'

export type Props = {
  dish: DishType
}

const DishCard = ({ dish }: Props) => {
  const [isVisible, setIsvisible] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  return (
    <>
      <S.Card>
        <S.Image src={dish.foto} alt="" />
        <S.Title>{dish.nome}</S.Title>
        <S.Description>{formatDescription(dish.descricao, 165)}</S.Description>
        <S.Button onClick={() => setIsvisible(true)}>
          Adicionar ao carrinho
        </S.Button>
      </S.Card>
      <S.Modal className={isVisible ? 'visible' : ''}>
        <Container>
          <S.ModalContent>
            <div>
              <S.ModalImage src={dish.foto} alt={`Foto de ${dish.nome}`} />
            </div>
            <div>
              <S.TitleBar>
                <S.ModalTitle>{dish.nome}</S.ModalTitle>
                <img onClick={() => setIsvisible(false)} src={close} alt="" />
              </S.TitleBar>
              <p>{dish.descricao}</p>
              <span>{`Serve: de ${dish.porcao}`}</span>
              <S.ModalButton>{`Adicionar ao carrinho - ${formatPrice(
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
