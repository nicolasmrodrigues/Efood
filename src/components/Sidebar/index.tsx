import { useDispatch } from 'react-redux'
import { Container, Overlay, Sidebar as SidebarStyle } from './styles'
import { close } from '../../store/reducers/cart'

export type Props = {
  isOpen: boolean
  children: JSX.Element
}

const Sidebar = ({ isOpen, children }: Props) => {
  const dispatch = useDispatch()

  return (
    <Container className={isOpen ? 'visible' : ''}>
      <>
        <Overlay onClick={() => dispatch(close())} />
        <SidebarStyle>{children}</SidebarStyle>
      </>
    </Container>
  )
}

export default Sidebar
