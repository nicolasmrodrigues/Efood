import Header from '../../components/Header'
import RestaurantsList from '../../containers/RestaurantsList'
import { Container } from '../../styles'
import { useGetRestaurantsQuery } from '../../services/api'
import Loader from '../../components/Loader'

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()
  return (
    <>
      <Header type="secondary" />
      <Container>
        {isLoading ? <Loader /> : <RestaurantsList restaurants={restaurants} />}
      </Container>
    </>
  )
}
export default Home
