import RestaurantCard from '../../components/RestaurantCard'
import { List } from './styles'

type Props = {
  restaurants: RestaurantType[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <List>
    {restaurants.map((restaurant) => (
      <RestaurantCard restaurant={restaurant} key={restaurant.id} />
    ))}
  </List>
)

export default RestaurantsList
