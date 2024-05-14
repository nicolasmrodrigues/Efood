import Banner from '../../components/Banner'
import Header from '../../components/Header'
import DishesList from '../../containers/DishesList'
import { Container } from '../../styles'
import { useParams } from 'react-router-dom'
import { useGetRestaurantQuery } from '../../services/api'
import Loader from '../../components/Loader'

const RestaurantProfile = () => {
  const { id } = useParams()

  const { data: restaurant, isLoading } = useGetRestaurantQuery(id as string)
  const dishes = restaurant?.cardapio

  return (
    <>
      <Header />
      {isLoading || !restaurant ? (
        <Loader />
      ) : (
        <>
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
