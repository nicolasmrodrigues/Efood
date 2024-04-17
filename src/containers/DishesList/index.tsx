import DishCard, { DishType } from '../../components/DishCard'
import { List } from './styles'

type Props = {
  items: DishType[]
}

const DishesList = ({ items }: Props) => (
  <List>
    {items.map((item) => (
      <DishCard
        image={item.image}
        name={item.name}
        description={item.description}
        id={item.id}
        key={item.id}
      />
    ))}
  </List>
)

export default DishesList
