import DishCard from '../../components/DishCard'
import { DishType } from '../../pages/RestaurantProfile'
import { List } from './styles'

type Props = {
  dishes: DishType[]
}

const DishesList = ({ dishes }: Props) => (
  <List>
    {dishes.map((dish) => (
      <DishCard
        image={dish.foto}
        name={dish.nome}
        description={dish.descricao}
        id={dish.id}
        key={dish.id}
      />
    ))}
  </List>
)

export default DishesList
