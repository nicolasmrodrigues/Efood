import Footer from './components/Footer'
import RoutesElement from './routes'
import GlobalStyle from './styles'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RoutesElement />
      <Footer />
    </BrowserRouter>
  )
}

export default App
