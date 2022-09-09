import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import { Container, Icon } from './styles'

const SocialMedia = () => {
  return (
    <Container>
      <FaGithubSquare style={{ width: 30,height: 30 }} />
      <FaLinkedin style={{ width: 30,height: 30 }} />
    </Container>
  )
}

export default SocialMedia
