import { Provider } from 'react-redux'
import Cart from './components/Cart'
import Footer from './components/Footer'
import RoutesElement from './routes'
import GlobalStyle from './styles'
import { BrowserRouter } from 'react-router-dom'
import store from './store'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <RoutesElement />
        <Cart />
        <Footer />
      </Provider>
    </BrowserRouter>
  )
}

export default App
