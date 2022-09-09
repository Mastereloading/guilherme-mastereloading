import Menu from "../menu/Menu"
import SocialMedia from "../social/SocialMedia"
import { Container, HeaderContainer } from "./styles"

import logo from '../../assets/logo.svg'

const Header = () => {
    return (
      <HeaderContainer>
        <Container>
          <img style={{ width: 30, color: 'blue'}} src={logo} />
          <Menu />
          <SocialMedia />
        </Container>
      </HeaderContainer>
    )
  }
  
  export default Header
  