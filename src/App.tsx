import { Provider } from 'react-redux'
import Footer from './components/Footer'
import RoutesElement from './routes'
import GlobalStyle from './styles'
import { BrowserRouter } from 'react-router-dom'
import store from './store'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <RoutesElement />
        <Sidebar />
        <Footer />
      </Provider>
    </BrowserRouter>
  )
}

export default App
