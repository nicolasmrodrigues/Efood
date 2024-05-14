import Banner from '../../components/Banner'
import Header from '../../components/Header'
import DishesList from '../../containers/DishesList'
import { Container } from '../../styles'
import { useParams } from 'react-router-dom'
import { useGetRestaurantQuery } from '../../services/api'

const RestaurantProfile = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantQuery(id as string)
  const dishes = restaurant?.cardapio

  return (
    <>
      {restaurant && (
        <>
          <Header />
          <Banner restaurant={restaurant} />
          <Container>
            <DishesList dishes={dishes} />
          </Container>
        </>
      )}
    </>
  )
}

export default RestaurantProfile
