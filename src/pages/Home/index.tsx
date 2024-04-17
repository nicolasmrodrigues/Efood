import Header from '../../components/Header'
import RestaurantsList from '../../containers/RestaurantsList'
import { Container } from '../../styles'
import restaurantImage from '../../assets/images/italian-restaurant.png'
import { RestaurantType } from '../../components/RestaurantCard'

const restaurants: RestaurantType[] = [
  {
    image: restaurantImage,
    infos: ['Italiana'],
    name: 'La Dolce Vita Trattoria',
    rating: '4.9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 1
  },
  {
    image: restaurantImage,
    infos: ['Italiana'],
    name: 'La Dolce Vita Trattoria',
    rating: '4.9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 2
  },
  {
    image: restaurantImage,
    infos: ['Italiana'],
    name: 'La Dolce Vita Trattoria',
    rating: '4.9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 3
  },
  {
    image: restaurantImage,
    infos: ['Italiana'],
    name: 'La Dolce Vita Trattoria',
    rating: '4.9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 4
  },
  {
    image: restaurantImage,
    infos: ['Italiana'],
    name: 'La Dolce Vita Trattoria',
    rating: '4.9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 5
  },
  {
    image: restaurantImage,
    infos: ['Italiana'],
    name: 'La Dolce Vita Trattoria',
    rating: '4.9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 6
  }
]

const Home = () => (
  <>
    <Header type="secondary" />
    <Container>
      <RestaurantsList items={restaurants} />
    </Container>
  </>
)

export default Home
