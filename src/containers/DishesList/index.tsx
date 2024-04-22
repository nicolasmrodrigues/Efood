import DishCard from '../../components/DishCard'
import { DishType } from '../../pages/RestaurantProfile'
import { List } from './styles'

type Props = {
  dishes: DishType[]
}

const DishesList = ({ dishes }: Props) => (
  <List>
    {dishes.map((dish) => (
      <DishCard dish={dish} key={dish.id} />
    ))}
  </List>
)

export default DishesList
