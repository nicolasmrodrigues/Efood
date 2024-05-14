import { BeatLoader } from 'react-spinners'
import { LoaderContainer } from './styles'
import { colors } from '../../styles'

const Loader = () => (
  <LoaderContainer>
    <BeatLoader color={colors.pink} />
  </LoaderContainer>
)

export default Loader
