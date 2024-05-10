import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import DishesList from '../../containers/DishesList'
import { Container } from '../../styles'
import { useParams } from 'react-router-dom'

const RestaurantProfile = () => {
  const [dishes, setDishes] = useState<DishType[]>([])
  const [restaurant, setRestaurant] = useState<RestaurantType>()
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setRestaurant(responseJson)
        setDishes(responseJson.cardapio)
      })
  }, [id])

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
