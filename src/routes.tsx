import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RestaurantProfile from './pages/RestaurantProfile'

const RoutesElement = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<RestaurantProfile />} />
  </Routes>
)

export default RoutesElement
