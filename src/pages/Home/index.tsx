import Header from '../../components/Header'
import RestaurantsList from '../../containers/RestaurantsList'
import { Container } from '../../styles'
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()
  return (
    <>
      <Header type="secondary" />
      <Container>
        <RestaurantsList restaurants={restaurants} />
      </Container>
    </>
  )
}
export default Home
