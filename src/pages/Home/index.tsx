import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import RestaurantsList from '../../containers/RestaurantsList'
import { Container } from '../../styles'

const Home = () => {
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((response) => response.json())
      .then((responseJson) => setRestaurants(responseJson))
  }, [])

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
