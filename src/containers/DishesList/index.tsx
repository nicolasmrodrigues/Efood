import DishCard from '../../components/DishCard'
import { List } from './styles'

type Props = {
  dishes: Dish[]
}

const DishesList = ({ dishes }: Props) => (
  <List>
    {dishes.map((dish) => (
      <DishCard dish={dish} key={dish.id} />
    ))}
  </List>
)

export default DishesList
