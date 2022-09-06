import Menu from "../menu/Menu"
import { Container, HeaderContainer } from "./styles"

const Header = () => {
    return (
      <HeaderContainer>
        <Container>
          <div>
            Logo
          </div>
          <Menu />
          <div>
            Social Media
          </div>
        </Container>
      </HeaderContainer>
    )
  }
  
  export default Header
  