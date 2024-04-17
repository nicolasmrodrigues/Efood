import RestaurantCard, { RestaurantType } from '../../components/RestaurantCard'
import { List } from './styles'

type Props = {
  items: RestaurantType[]
}

const RestaurantsList = ({ items }: Props) => (
  <List>
    {items.map((item) => (
      <RestaurantCard
        image={item.image}
        infos={item.infos}
        id={item.id}
        description={item.description}
        name={item.name}
        rating={item.rating}
        key={item.id}
      />
    ))}
  </List>
)

export default RestaurantsList
